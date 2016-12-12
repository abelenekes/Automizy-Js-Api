define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Jobs = function (obj) {
        var t = this;
        t.init();

        t.initParameter(obj || {});
    };


    var p = Jobs.prototype;


    $AA.initBasicFunctions(Jobs, "Jobs", {
        url:'jobs',
        useBaseUrl:true
    });

});