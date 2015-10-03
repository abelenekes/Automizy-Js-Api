define([
    'automizyApi/core',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Webhooks = function (obj) {
        var t = this;
        t.d = {
            a: 3,
            option: {},
            url: $AA.u.webhooks
        };
        t.init();

        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };


    var p = Webhooks.prototype;


    $AA.initBasicFunctions(Webhooks, "Webhooks");

});