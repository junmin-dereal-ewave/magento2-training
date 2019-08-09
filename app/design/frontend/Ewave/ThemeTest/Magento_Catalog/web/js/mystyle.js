define(['jquery'], function ($) {
    'use strict';

    return {
        'mystyle': function (config, element) {
            $(element).css('color', config.color);
        }
    };
});
