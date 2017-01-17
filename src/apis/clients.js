define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Clients = function (obj) {
        var t = this;
        t.init();

        t.initParameter(obj || {});
    };


    var p = Clients.prototype;

    p.create = function(){
        var t = this;
        return $.ajax({
            url: t.url(),
            type: 'POST',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()}
        });
    };
    
    $AA.initBasicFunctions(Clients, "Clients", {
        url:'clients',
        useBaseUrl:true
    });

});