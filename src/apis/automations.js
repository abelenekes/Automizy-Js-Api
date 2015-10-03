define([
    'automizyApi/core',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Automations = function (obj) {
        var t = this;
        t.d = {
            a: 3,
            option: {},
            url: $AA.u.automations
        };
        t.init();

        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };


    var p = Automations.prototype;

    
    $AA.initBasicFunctions(Automations, "Automations");

});