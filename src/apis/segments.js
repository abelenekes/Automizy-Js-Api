define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Segments = function (obj) {
        var t = this;
        t.init();

        t.initParameter(obj || {});
    };


    var p = Segments.prototype;
    p.calculateByArray = function(arr){
        var t = this;
        return $.ajax({
            url: t.url()+'/calculate' + t.d.urlSuffix,
            type: 'GET',
            data: arr,
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.calculateById = function(id){
        var t = this;
        return $.ajax({
            url: t.url()+'/'+id+'/calculate' + t.d.urlSuffix,
            type: 'GET',
            data: {
                waitForResponse:true,
                saveAfterFinish:false
            },
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.calculateAndSave = function(id){
        var t = this;
        return $.ajax({
            url: t.url()+'/'+id+'/calculate' + t.d.urlSuffix,
            type: 'GET',
            data: {
                waitForResponse:true,
                saveAfterFinish:true
            },
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    
    $AA.initBasicFunctions(Segments, "Segments", {
        url:'segments',
        useBaseUrl:true
    });

});