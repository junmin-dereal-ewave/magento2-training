define(['jquery'], function ($){
    'use strict';

    return function(config, element) {
        $(element).css('background', config.background);
    }
});