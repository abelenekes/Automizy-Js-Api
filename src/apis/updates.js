define([
    'automizyApi/core',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {

    var Updates = function (obj) {
        var t = this;
        t.d = {
            a: 3,
            option: {},
            url: $AA.u.updates
        };
        t.init();

        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };


    var p = Updates.prototype;

    $AA.initBasicFunctions(Updates, "Updates");

});