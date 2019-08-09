define(['jquery'], function ($) {
    'use strict';

    var mixin = {
        domore: function (elem) {
            console.log(elem);
        }
    };

    return function (target) {
        return $.extend(target, mixin);
    };
});
