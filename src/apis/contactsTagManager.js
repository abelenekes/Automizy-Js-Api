define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var ContactsTagManager = function (obj) {
        var t = this;
        t.d = {
            hasEmbedded:false,
            hasId:false
        };
        t.init();

        t.initParameter(obj || {});
    };


    var p = ContactsTagManager.prototype;
    
    $AA.initBasicFunctions(ContactsTagManager, "ContactsTagManager", {
        url:'contacts/tag-manager',
        useBaseUrl:true
    });

});