define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Updates = function (obj) {
        var t = this;
        t.init();

        t.initParameter(obj || {});
    };


    var p = Updates.prototype;

    $AA.initBasicFunctions(Updates, "Updates", {
        url:'updates',
        useBaseUrl:true
    });

});