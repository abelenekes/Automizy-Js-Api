define([
    'automizyApi/core',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var UnbounceForms = function (obj) {
        var t = this;
        t.d = {
            a: 3,
            option: {},
            url: $AA.u.unbounceForms,
            hasEmbedded:false
        };
        t.init();

        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };


    var p = UnbounceForms.prototype;

    
    $AA.initBasicFunctions(UnbounceForms, "UnbounceForms");

});