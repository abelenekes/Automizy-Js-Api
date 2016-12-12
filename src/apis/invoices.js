define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Invoices = function (obj) {
        var t = this;
        t.init();

        t.initParameter(obj || {});
    };


    var p = Invoices.prototype;

    
    $AA.initBasicFunctions(Invoices, "Invoices", {
        url:'invoices',
        useBaseUrl:true
    });

});