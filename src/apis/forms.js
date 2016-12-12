define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Forms = function (obj) {
        var t = this;
        t.init();

        t.initParameter(obj || {});
    };


    var p = Forms.prototype;


    p.getFullTimeLineById = function (id, from, to, step) {
        var t = this;
        var data = {
            format:'timeline'
        };
        if(typeof from !== 'undefined' && from !== false){
            data.from = from;
        }
        if(typeof to !== 'undefined' && to !== false){
            data.to = to;
        }
        return $.ajax({
            url: t.url() + '/' + id + '/conversion' + t.d.urlSuffix,
            type: 'GET',
            dataType: 'json',
            data: data,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };

    
    $AA.initBasicFunctions(Forms, "Forms", {
        url:'forms',
        useBaseUrl:true
    });

});