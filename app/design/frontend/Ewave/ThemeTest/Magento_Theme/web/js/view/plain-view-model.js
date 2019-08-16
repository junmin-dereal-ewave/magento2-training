define([], function() {
    'use strict';

    return function (config) {  //config来自x-magento的json编译
        return {
            title: 'This text is from plain-view-model.js',
            config: config
        }
    }
});