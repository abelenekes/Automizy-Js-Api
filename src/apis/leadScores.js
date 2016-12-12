define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var LeadScores = function (obj) {
        var t = this;
        t.init();

        t.initParameter(obj || {});
    };


    var p = LeadScores.prototype;


    $AA.initBasicFunctions(LeadScores, "LeadScores", {
        url:'lead-scores',
        useBaseUrl:true
    });

});