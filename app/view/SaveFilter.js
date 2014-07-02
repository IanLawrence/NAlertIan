/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 03.06.14
 * Time: 18:36
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.view.SaveFilter', {
    extend: 'Ext.List',
    xtype: 'saveList',
    controller: 'NAlert.controller.SaveFilterViewController',
    requires: [
        'NAlert.controller.SaveFilterViewController'
    ],
    config: {
        title: 'SELECT A SAVED FILTER',

        plugins: ['pullrefresh'],

        width: '100%',

        height: '100%',

        filter: null,

        store: 'Filters',

        cls: 'filter-list',

        itemId: 'saveList',

        itemHeight: '80px',

        selectedCls: 'x-filter-select',

        itemTpl: [
            '<div class="x-filter">',
            '<div class="x-filter-inner"><div class="x-filters-title">' +
                '{name}' +
                '</div>',
            '</div>'
        ],
        items: [

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
                        text: 'save',
                        cls: 'apply',
                        itemId: 'save',
                        ui: 'filterBar'
                    }
                ]
            },
            {
                xtype: 'textfield',
                itemId: 'name',
                docked: 'bottom',
                cls: 'save-text-filed',
                margin: '10px, 10px 0 0',
                placeHolder: 'Name this filter'
            }
        ]
    }
});