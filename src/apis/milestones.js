define([
    'automizyApi/core',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Milestones = function (obj) {
        var t = this;
        t.d = {
            a: 3,
            option: {},
            url: $AA.u.milestones
        };
        t.init();

        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };


    var p = Milestones.prototype;


    $AA.initBasicFunctions(Milestones, "Milestones");

});