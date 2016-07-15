define([
    'automizyApi/core',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var ContactTags = function (obj) {
        var t = this;
        t.d = {
            a: 3,
            option: {},
            url: $AA.u.contactTags,
            hasEmbedded:false,
            hasId:false
        };
        t.init();

        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };


    var p = ContactTags.prototype;
    
    $AA.initBasicFunctions(ContactTags, "ContactTags");

});