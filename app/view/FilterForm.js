/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 02.06.14
 * Time: 19:47
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.view.FilterForm', {
    extend: 'Ext.form.Panel',
    controller: 'NAlert.controller.FilterFormViewController',
    requires: [
        'NAlert.controller.FilterFormViewController',
        'NAlert.view.component.Slide'
    ],
    xtype: 'filterForm',
    config: {
        width: '100%',
        height: '100%',
        scrollable: null,
        forms: [],
        title: 'FILTER NOTIFICATION',
        cls: 'x-filter-form',
        items: [
            {
                xtype: 'container',
                itemId: 'formContainer',
                width: '100%',
                height: '100%',
                items: [
                    {
                        xtype: 'selectfield',
                        cls: 'date-select',
                        label: 'timeframe',
                        autoComplete: true,

                        name: 'timeFrame',
                        options: [
                            {text: 'All',  value: ['None']},
                            {text: '1w',  value: ['1 week']},
                            {text: '2w', value: ['2 week']},
                            {text: '3w',  value: ['3 week']},
                            {text: '1m',  value: ['1 month']},
                            {text: '3m', value: ['3 month']},
                            {text: '6m',  value: ['6 month']},
                            {text: '12m', value: ['1 year']}
                        ]
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                cls: 'bottom',
                ui: 'none',
                items: [
                    {
                        xtype: 'button',
                        text: 'cancel',
                        ui: 'filterBar',
                        itemId: 'cancel',
                        cls: 'cancel'
                    },
                    {
                        xtype: 'button',
                        text: 'apply',
                        cls: 'apply',
                        itemId: 'apply',
                        ui: 'filterBar'
                    }
                ]
            }
        ]
    },
    constructor: function () {
        this.callParent(arguments);

        var formContainer = this.down('container[itemId=formContainer]'),
            criteries = Ext.getStore('Criterias').getAt(0),
            forms = this.config.forms,
            form
        ;

        forms.push(formContainer.add(Ext.create('NAlert.view.component.Slide', {
            name: 'species',
            fieldList: criteries.get('species')
        })));
        forms.push(formContainer.add(Ext.create('NAlert.view.component.Slide', {
            name: 'diseases',
            fieldList: criteries.get('diseases')
        })));

        form = formContainer.add(Ext.create('NAlert.view.component.Slide', {
            name: 'woredas'

        }));
        form.down('formpanel').setScrollable(false);
        form.addField(formContainer.add(Ext.create('NAlert.view.component.SelectList', {
            scrollable: null
        })));

        this.on('slideOn', function (name) {
            Ext.each(formContainer.items.items, function (item) {
                if (item._name !== name) {
                    if (item.getCls() && item.getCls()[0] === 'on') {
                        item.replaceCls('on', 'off');
                    }
                }
            });
        });

    },
    getValue: function () {
        var formContainer = this.down('container[itemId=formContainer]'),
            items = formContainer.items.items,
            value = {}
        ;

        for (var i = 0; i < items.length; i ++) {
            var name = items[i].getName();
            value[name] = items[i].getValue();
        }

        return value;
    }
});