define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Milestones = function (obj) {
        var t = this;
        t.init();

        t.initParameter(obj || {});
    };


    var p = Milestones.prototype;


    $AA.initBasicFunctions(Milestones, "Milestones", {
        url:'milestones',
        useBaseUrl:true
    });

});