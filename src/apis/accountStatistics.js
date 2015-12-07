define([
    'automizyApi/core',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var AccountStatistics = function (obj) {
        var t = this;
        t.d = {
            a: 3,
            option: {},
            url: $AA.u.accountStatistics
        };
        t.init();

        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };


    var p = AccountStatistics.prototype;

    
    $AA.initBasicFunctions(AccountStatistics, "AccountStatistics");

});