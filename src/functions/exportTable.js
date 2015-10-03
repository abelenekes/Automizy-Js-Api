
define([
    'automizyApi/core',
    'automizyApi/token'
], function ($AA) {

    $AA.exportTable = function (table) {
        if (typeof table === 'undefined') {
            return false;
        }
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

        var xhr = $AA[apiName]().orderBy(orderBy).orderDir(orderDir).fields(exportFields).urlSuffix(apiUrlSuffix).export().done(function(data, textStatus, jqXHR){
            window.location.href = jqXHR.getResponseHeader('X-Download-Url');
        });
    };
});