define([
    'automizyApi/core',
    'automizyApi/token'
], function () {
    var Account = function (obj) {};

    var p = Account.prototype;
    p.get = function(){
        return $.ajax({
            url: $AA.u.account,
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()}
        });
    };
    p.limits = function(){
        return $.ajax({
            url: $AA.u.account + '/limits',
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()}
        });
    };
    p.getPackages  = function(){
        return $.ajax({
            url: $AA.u.account + '/limits',
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()}
        });
    };

    /* No Rest-Api, so the basic functions are disabled */

    $AA.m['Account'] = Account;
    $AA['account'] = function (obj) {
        var t = new Account(obj);
        return t;
    };

});