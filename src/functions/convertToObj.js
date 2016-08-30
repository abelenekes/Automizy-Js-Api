define(['automizyApi/core'], function () {
    $AA.convertToObj = function (data, keyValue) {
        var keyValue = keyValue || 'id';
        var obj = {};
        for(var i = 0; i < data.length; i++){
            obj[data[i][keyValue]] = data[i];
        }
        return obj;
    };
});