define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var AutoDetectedForms = function (obj) {
        var t = this;
        t.d = {
            hasEmbedded:false
        };
        t.init();

        t.initParameter(obj || {});
    };


    var p = AutoDetectedForms.prototype;

    $AA.initBasicFunctions(AutoDetectedForms, "AutoDetectedForms", {
        url:'forms/autodetect',
        useBaseUrl:true
    });

});