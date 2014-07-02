/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 02.06.14
 * Time: 17:16
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.view.FilterList', {
    extend: 'Ext.List',
    xtype: 'filterList',
    controller: 'NAlert.controller.FilterListViewController',
    requires: [
        'NAlert.controller.FilterListViewController'
    ],
    config: {
        title: 'SELECT A SAVED FILTER',

        plugins: ['pullrefresh'],

        width: '100%',

        height: '100%',

        store: 'Filters',

        cls: 'filter-list',

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
                        text: 'apply',
                        cls: 'apply',
                        itemId: 'apply',
                        ui: 'filterBar'
                    }
                ]
            }
        ]
    }
});