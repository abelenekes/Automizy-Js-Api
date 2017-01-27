define(['automizyApi/core'], function () {
    $AA.addEvent = function (eventName, func) {
        if (typeof eventName !== 'undefined' && typeof func === 'function') {
            if (typeof $AA.events[eventName] === 'undefined') {
                $AA.events[eventName] = [];
            }
            $AA.events[eventName].push(func);
        }
        return $AA;
    };
});