define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Users = function (obj) {
        var t = this;
        t.init();

        t.initParameter(obj || {});
    };


    var p = Users.prototype;

    p.switch = function(site){
        var t = this;
        return $.ajax({
            url: t.url() + '/switch-site',
            type: 'POST',
            data:{site:site},
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()}
        }).done(function(data) {
            $AA.token().set(data);
            $AA.token().refreshLoopRestart();
        }).error(function(errData){

        });
    };
    
    $AA.initBasicFunctions(Users, "Users", {
        url:'users',
        useBaseUrl:true
    });

});