define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var CustomFields = function (obj) {
        var t = this;
        t.init();

        t.initParameter(obj || {});
    };


    var p = CustomFields.prototype;

    
    $AA.initBasicFunctions(CustomFields, "CustomFields", {
        url:'custom-fields',
        useBaseUrl:true
    });

});