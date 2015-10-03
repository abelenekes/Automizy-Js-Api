define([
    'automizyApi/core',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var ContactImports = function (obj) {
        var t = this;
        t.d = {
            a: 3,
            option: {},
            url: $AA.u.contactImports
        };
        t.init();

        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };


    var p = ContactImports.prototype;

    p.getContactsByIdAndType = function(id, type){
        var t = this;
        return $.ajax({
            url: t.d.url + '/' + id + '/' + type,
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    p.getForbiddenContactsById = function(id){
        return this.getContactsByIdAndType(id, 'creation-forbidden-errors');
    };
    p.getAlreadyInDatabaseContactsById = function(id){
        return this.getContactsByIdAndType(id, 'already-in-database-errors');
    };
    p.getInvalidContactsById = function(id){
        return this.getContactsByIdAndType(id, 'invalid-email-errors');
    };
    p.getUnsubscribedContactsById = function(id){
        return this.getContactsByIdAndType(id, 'unsubscribed-errors');
    };
    
    $AA.initBasicFunctions(ContactImports, "ContactImports");

});