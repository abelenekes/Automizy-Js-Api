define(['automizyApi/core'], function () {
    $AA.dataToOptions = function (data, field, id) {
        var field = field || 'name';
        var id = id || 'id';
        return $.map(data, function(obj){
            return [[obj[id], obj[field]]]
        });
    };
});