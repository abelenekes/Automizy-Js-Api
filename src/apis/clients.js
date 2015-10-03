define([
    'automizyApi/core',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Clients = function (obj) {
        var t = this;
        t.d = {
            a: 3,
            option: {},
            url: $AA.u.clients
        };
        t.init();

        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };


    var p = Clients.prototype;

    p.create = function(){
        return $.ajax({
            url: $AA.u.clients,
            type: 'POST',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()}
        });
    };
    
    $AA.initBasicFunctions(Clients, "Clients");

});