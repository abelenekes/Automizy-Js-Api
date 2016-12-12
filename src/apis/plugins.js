define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Plugins = function (obj) {
        var t = this;
        t.init();

        t.initParameter(obj || {});
    };

    var p = Plugins.prototype;

    $AA.initBasicFunctions(Plugins, "Plugins", {
        url:'plugins',
        useBaseUrl:true
    });

});