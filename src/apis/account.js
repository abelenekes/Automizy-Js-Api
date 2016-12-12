define([
    'automizyApi/core',
    'automizyApi/functions/urlManager'
], function () {
    var Account = function (obj) {};

    var p = Account.prototype;
    p.get = function(){
        return $.ajax({
            url: $AA.accountUrl(),
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()}
        });
    };
    p.limits = function(){
        return $.ajax({
            url: $AA.accountUrl() + '/limits',
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()}
        });
    };
    p.getPackages  = function(){
        return $.ajax({
            url: $AA.accountUrl() + '/limits',
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()}
        });
    };

    /* No Rest-Api, so the basic functions are disabled */

    $AA.createUrl('account')('account', true);
    $AA.m['Account'] = Account;
    $AA['account'] = function (obj) {
        var t = new Account(obj);
        return t;
    };

});