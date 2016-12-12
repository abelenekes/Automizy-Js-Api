define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Webhooks = function (obj) {
        var t = this;
        t.init();

        t.initParameter(obj || {});
    };


    var p = Webhooks.prototype;


    $AA.initBasicFunctions(Webhooks, "Webhooks", {
        url:'webhooks',
        useBaseUrl:true
    });

});