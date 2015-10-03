define([
    'automizyApi/core',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Contacts = function (obj) {
        var t = this;
        t.d = {
            a: 3,
            option: {},
            url: $AA.u.contacts
        };
        t.init();

        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };


    var p = Contacts.prototype;

    p.getActivitiesById = function(id){
        var t = this;
        return $.ajax({
            url: t.d.url + '/' + id + '/activities',
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    
    $AA.initBasicFunctions(Contacts, "Contacts");

});