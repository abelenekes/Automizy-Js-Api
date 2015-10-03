define([
    'automizyApi/core',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Jobs = function (obj) {
        var t = this;
        t.d = {
            a: 3,
            option: {},
            url: $AA.u.jobs
        };
        t.init();

        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };


    var p = Jobs.prototype;


    $AA.initBasicFunctions(Jobs, "Jobs");

});