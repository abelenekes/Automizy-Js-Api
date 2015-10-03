define(['automizyApi/core'], function () {
    $AA.date = {};
    $AA.date.now = function () {
        return new Date().getTime();
    };
    $AA.date.timestamp = function () {
        return Math.floor($AA.date.now() / 1000);
    };
});