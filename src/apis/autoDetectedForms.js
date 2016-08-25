define([
    'automizyApi/core',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var AutoDetectedForms = function (obj) {
        var t = this;
        t.d = {
            a: 3,
            option: {},
            url: $AA.u.autoDetectedForms,
            hasEmbedded:false
        };
        t.init();

        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };


    var p = AutoDetectedForms.prototype;

    
    $AA.initBasicFunctions(AutoDetectedForms, "AutoDetectedForms");

});