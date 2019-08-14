define([
    'uiComponent',
    'ko'
], function (uiComponent, ko) {
    'use strict';

    return uiComponent.extend({
        _currentTime: ko.observable("Loading..."), //set inital value
        initialize: function () {
            this._super();
            setInterval(this.updateTime.bind(this), 1000); //update time every 1 second
        },
        getTime: function() {
            return this._currentTime;
        },
        updateTime: function () {
            this._currentTime(new Date());
        },
        isActive: function () {
            return true;
        }
    });
});