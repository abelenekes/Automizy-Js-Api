define([
    'automizyApi/core',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Users = function (obj) {
        var t = this;
        t.d = {
            a: 3,
            option: {},
            url: $AA.u.users
        };
        t.init();

        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };


    var p = Users.prototype;

    p.switch = function(user){
        return $.ajax({
            url: $AA.u.users + '/switch-site',
            type: 'POST',
            data:{site:user},
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()}
        }).done(function(data) {
            $AA.token().set(data);
            $AA.token().refreshLoopRestart();
        }).error(function(errData){

        });
    };
    
    $AA.initBasicFunctions(Users, "Users");

});