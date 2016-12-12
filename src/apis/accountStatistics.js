define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var AccountStatistics = function (obj) {
        var t = this;
        t.init();

        t.initParameter(obj || {});
    };


    var p = AccountStatistics.prototype;


    $AA.initBasicFunctions(AccountStatistics, "AccountStatistics", {
        url:'account/statistics',
        useBaseUrl:true
    });

});