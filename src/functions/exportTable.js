
define([
    'automizyApi/core',
    'automizyApi/token'
], function ($AA) {

    $AA.exportTable = function (table, settings) {
        if (typeof table === 'undefined') {
            return false;
        }
        var settings = settings || {};
        var apiName = table.data('apiName');
        var apiUrlSuffix = table.data('apiUrlSuffix');
        var exportFields = table.data('exportFields') || [];
        if(exportFields.length > 0) {
            exportFields = exportFields.join(',');
        }else{
            exportFields = false;
        }
        var orderBy = table.d.orderBy;
        var orderDir = table.d.orderDir;
        if(typeof apiUrlSuffix === 'undefined'){
            apiUrlSuffix = '';
        }

        var where = [];
        if((typeof settings.search === 'string' || typeof settings.search === 'number') && settings.search.length > 0){
            var cols = table.cols();
            for(var i = 0; i < cols.length; i++){
                var scols = table.d.settings.cols;
                var ss = {};
                for(var j = 0; j < scols.length; j++){
                    ss[scols[j].name || 0] = scols[j].searchable===false?false:true;
                }
                var name = cols[i].name();
                if(ss[name]){
                    where.push([[name, 'like', '%'+settings.search+'%']]);
                }
            }
        }
        if(typeof settings.ids !== 'undefined'){
            if(where.length > 0){
                for(var i = 0; i < where.length; i++){
                    where[i].push(['id', 'in', settings.ids]);
                }
            }else {
                where.push([['id', 'in', settings.ids]]);
            }
        }

        console.log(where);

        var xhr = $AA[apiName]().orderBy(orderBy).orderDir(orderDir).fields(exportFields).where(where).urlSuffix(apiUrlSuffix).export().done(function(data, textStatus, jqXHR){
            window.location.href = jqXHR.getResponseHeader('X-Download-Url');
        });
    };
});