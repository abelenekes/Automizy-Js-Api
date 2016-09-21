
define([
    'automizyApi/core',
    'automizyApi/token'
], function ($AA) {

    $AA.refreshTable = function (table) {
        if (typeof table === 'undefined' || table === false) {
            return false;
        }
        var apiName = table.data('apiName');
        if(typeof $AA[apiName] === 'undefined'){
            return false;
        }
        var apiUrlSuffix = table.data('apiUrlSuffix');
        var apiItemsDir = table.data('apiItemsDir');
        var apiElementsDir = table.data('apiElementsDir');
        var apiFormat = table.data('apiFormat');
        var refreshComplete = table.data('refreshComplete');
        var orderBy = table.d.orderBy;
        var orderDir = table.d.orderDir;
        var limit = table.perPage();
        var page = table.page();
        var fields = table.data('fields') || false;
        var showId = false;
        var where = table.data('where') || [];
        var specialWhereArr = false;
        if(typeof table.data('whereFunction') === 'function'){
            var specialWhere = table.data('whereFunction')();
            if(specialWhere !== false){
                specialWhereArr = table.data('whereFunction')();
            }
        }
        if(typeof table.data('xhr') !== 'undefined'){
            table.data('xhr').abort();
        }
        if(typeof apiUrlSuffix === 'undefined'){
            apiUrlSuffix = '';
        }
        if(typeof apiItemsDir === 'undefined'){
            apiItemsDir = false;
        }
        if(typeof apiElementsDir === 'undefined'){
            apiElementsDir = false;
        }
        if(typeof apiFormat === 'undefined'){
            apiFormat = false;
        }
        if(typeof refreshComplete !== 'function'){
            refreshComplete = function(){};
        }

        if(fields === false) {
            fields = [];
            var cols = table.cols();
            for (var i = table.selectable() ? 1 : 0; i < cols.length; i++) {
                if (cols[i].active()) {
                    fields.push(cols[i].name());
                }
            }
            if ($.inArray('id', fields) === -1) {
                fields.push('id');
            }else{
                showId = true;
            }
            fields = fields.join();
        }else{
            fields = JSON.stringify(fields);
        }

        if((typeof table.d.searchValue === 'string' || typeof table.d.searchValue === 'number') && table.d.searchValue.length > 0){
            var cols = table.cols();
            for(var i = 0; i < cols.length; i++){
                var scols = table.d.settings.cols;
                var ss = {};
                for(var j = 0; j < scols.length; j++){
                    ss[scols[j].name || 0] = scols[j].searchable===false?false:true;
                }
                var name = cols[i].name();
                if(ss[name]){
                    var whereArr = [[name, 'like', '%'+table.d.searchValue+'%']];
                    if(specialWhereArr !== false){
                        for(var j = 0; j < specialWhereArr.length; j++){
                            whereArr.push(specialWhereArr[j]);
                        }
                    }
                    where.push(whereArr);
                }
            }
        }else{
            if(specialWhereArr !== false){
                where.push(specialWhereArr);
            }
        }

        table.d.$checkboxCheckAll.prop('checked', false).change();
        table.loading();
        var xhr = $AA[apiName]().links('').fields(fields).limit(limit).page(page).where(where).orderBy(orderBy).orderDir(orderDir).urlSuffix(apiUrlSuffix).format(apiFormat).get().done(function (data) {
            table.pageMax(data.page_count);
            /*
            table.totalEntries(data.total_items);
            table.writeEntries();
            */

            if(apiItemsDir !== false){
                var dir = apiItemsDir.split('/');
                var records = data;
                for(var i = 0; i < dir.length; i++){
                    records = records[dir[i]];
                }
            }else{
                var records = data['_embedded'][apiName];
            }

            var length = records.length;
            //if (length > 0) {
                var rows = [];
                for (var i = 0; i < length; i++) {
                    var record = records[i];
                    if(apiElementsDir !== false){
                        record = records[i][apiElementsDir];
                    }
                    var row = {recordId: record['id'] || 0, values: {}};
                    for (var j in record) {
                        if (j.charAt(0) === '_' || (j === 'id' && !showId)) {
                            continue;
                        }
                        if (record[j] !== null && (typeof record[j] === 'object' || typeof record[j] === 'array')) {
                            if($.isArray(record[j])){
                                row.values[j] = record[j];
                            }else{
                                var isDateObj = false;
                                var dateObjCount = 0;
                                var isCodeValueObj = false;
                                var codeValueObjCount = 0;
                                var isCustomFields = false;
                                for (var k in record[j]) {
                                    if (k === 'date' || k === 'timezone' || k === 'timezone_type') {
                                        dateObjCount++;
                                    }
                                    if (k === 'code' || k === 'value') {
                                        codeValueObjCount++;
                                    }
                                    isDateObj = false;
                                    isCodeValueObj = false;
                                    isCustomFields = false;
                                    if (dateObjCount === 3) {
                                        isDateObj = true;
                                    } else if (codeValueObjCount == 2) {
                                        isCodeValueObj = true;
                                    } else if(j === 'customFields'){
                                        isCustomFields = true;
                                    }
                                }
                                if (isDateObj) {
                                    row.values[j] = record[j]['date'] || record[j][Object.keys(record[j])[0]] || '';
                                } else if (isCodeValueObj) {
                                    row.values[j] = record[j]['value'] || record[j][Object.keys(record[j])[0]] || '';
                                } else if (isCustomFields) {
                                    for (var l in record[j]) {
                                        if (record[j][l] !== null && (typeof record[j][l] === 'array' || typeof record[j][l] === 'object')) {
                                            if($.isArray(record[j][l])){
                                                row.values['customFields.' + l] = record[j][l];
                                                /*if(record[j][l].length > 0){
                                                    row.values['customFields.' + l] = '<ul style="margin: 0; padding-left: 17px;"><li>' + record[j][l].join('</li><li>') + '</li></ul>';
                                                }*/
                                            }else {
                                                row.values['customFields.' + l] = record[j][l]['date'] || record[j][l]['value'] || record[j][l][Object.keys(record[j][l])[0]] || '';
                                            }
                                        } else {
                                            row.values['customFields.' + l] = record[j][l];
                                        }
                                    }
                                } else {
                                    row.values[j] = record[j];
                                }
                            }
                        } else {
                            row.values[j] = record[j];
                        }
                    }
                    rows.push(row);
                }

                table.data({records:records});
                table.deleteRows();
                var col = table.getColByName('customFields');
                if(col !== false && typeof col.$cells === 'function'){
                    col.$cells().css('display', 'none');
                }
                table.rows(rows);

                /*for(var i = 0; i < rows.length; i++){
                    var ind = i;
                    (function(index) {
                        setTimeout(function(){
                            table.addRows(rows[index]);
                        }, i);
                    })(i);
                }*/

                table.d.stepFunction();

                setTimeout(function(){
                    refreshComplete.apply(table, [table, table.d.$widget]);
                }, 10);

            //}
        });
        table.data('xhr', xhr);
        return xhr;
    }
});