define([
    'automizyApi/core',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var CustomFields = function (obj) {
        var t = this;
        t.d = {
            a: 3,
            option: {},
            url: $AA.u.customFields
        };
        t.init();

        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };


    var p = CustomFields.prototype;

    
    $AA.initBasicFunctions(CustomFields, "CustomFields");

});