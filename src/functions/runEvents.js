define(['automizyApi/core'], function () {
    $AA.runEvents = function (eventName, thisParameter, parameterArray) {
        if (typeof $AA.events[eventName] !== 'undefined') {
            for (var i = 0; i < $AA.events[eventName].length; i++) {
                $AA.events[eventName][i].apply(thisParameter, parameterArray);
            }
        }
        return $AA;
    };
});