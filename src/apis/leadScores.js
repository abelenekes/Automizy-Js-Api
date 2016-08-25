define([
    'automizyApi/core',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var LeadScores = function (obj) {
        var t = this;
        t.d = {
            a: 3,
            option: {},
            url: $AA.u.leadScores
        };
        t.init();

        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };


    var p = LeadScores.prototype;


    $AA.initBasicFunctions(LeadScores, "LeadScores");

});