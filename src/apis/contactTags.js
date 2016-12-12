define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var ContactTags = function (obj) {
        var t = this;
        t.d = {
            hasEmbedded:false,
            hasId:false
        };
        t.init();

        t.initParameter(obj || {});
    };


    var p = ContactTags.prototype;
    
    $AA.initBasicFunctions(ContactTags, "ContactTags", {
        url:'contacts/tags',
        useBaseUrl:true
    });

});