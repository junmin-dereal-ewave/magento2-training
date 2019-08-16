define([
    'ko'
], function (ko){
    'use strict';

    return function(config) {
        var viewModel = ko.track({
            title: "This is the observable view model",
            changeTitle: function () {
                this.title = this.title === "This is the observable view model" ?
                "This is the changed title" :
                "This is the observable view model";
            },
            list: [
                {name: "John"},
                {name: "Jane"},
                {name: "George"},
            ],
            listReplace: function() {
                this.list.splice(0, 1, {name: "Replaced Name"});
            },
        });

        viewModel.computedTitle = ko.computed(function () {
            return 'Current Title: ' + this.title;
        }.bind(viewModel));

        return viewModel;
    }
});