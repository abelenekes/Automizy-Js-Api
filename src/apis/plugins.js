define([
    'automizyApi/core',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Plugins = function (obj) {
        var t = this;
        t.d = {
            a: 3,
            option: {},
            url: $AA.u.plugins
        };
        t.init();

        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };

    var p = Plugins.prototype;

    $AA.initBasicFunctions(Plugins, "Plugins");

});