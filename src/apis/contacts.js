define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Contacts = function (obj) {
        var t = this;
        t.init();

        t.initParameter(obj || {});
    };


    var p = Contacts.prototype;

    p.getActivitiesById = function(id){
        var t = this;
        return $.ajax({
            url: t.url() + '/' + id + '/activities',
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };
    
    $AA.initBasicFunctions(Contacts, "Contacts", {
        url:'contacts',
        useBaseUrl:true
    });

});