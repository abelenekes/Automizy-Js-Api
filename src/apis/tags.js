define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/token'
], function () {
    var Tags = function (obj) {};

    var p = Tags.prototype;
    p.get = function(){
        return $.ajax({
            url: $AA.tagsUrl(),
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()}
        });
    };

    /* No Rest-Api, so the basic functions are disabled */

    $AA.createUrl('tags')('tags', true);
    $AA.m['Tags'] = Tags;
    $AA['tags'] = function (obj) {
        var t = new Tags(obj);
        return t;
    };

});