define(['uiComponent'], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            label: 'Observables, using getters and setters',
            additional_charge: 2,
            items: [
                {name: 'Aa', qty: 5, price: 1.5},
                {name: 'Ba', qty: 3, price: 3.0}
            ],
            tracks: {
                label: true,
                additional_charge: true,
                items: true
            }
        },
        //computed value/property
        rowTotal: item => item.qty * item.price,
        total: function () {
            const sum = this.items.map(this.rowTotal)
                .reduce((acc, total) => acc + total);

            this.label = this.label + '!';
            return sum + this.additional_charge;
        }
    })
})