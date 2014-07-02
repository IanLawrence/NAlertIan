/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 02.06.14
 * Time: 13:36
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.view.AlertList', {
    extend: 'Ext.List',
    xtype: 'alertList',
    controller: 'NAlert.controller.AlertListViewController',
    requires: [
        'NAlert.controller.AlertListViewController'
    ],
    config: {
        title: 'N-ALERTS',

        plugins: [
            {
                xclass: 'Ext.plugin.ListPaging',
                autoPaging: true
            },
            'pullrefresh'
        ],

        autoPaging: true,

        filter: null,

        width: '100%',

        height: '100%',

        store: 'Alerts',

        itemHeight: '80px',

        selectedCls: '',

        itemTpl: [
            '<div class="x-alert">',
                '<div class="x-alert-inner"><div class="x-alert-title">' +
                    '<span class="fmd">FMD</span>' +
                    ' - {data.species[0]}, {data.cases} cases' +
                '</div>',
                '<div class="x-alert-footer">' +
                    '<span style="float: left">{woreda}</span>' +
                    '<span style="float: right">{date:date("d/m/Y")}</span>' +
                '</div></div>',
            '</div>'
        ],
        items: [
            {
                xtype: 'toolbar',
                docked: 'bottom',
                ui: 'filter-bar',
                cls: 'filters',
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'top',

                        ui: 'filter-bar',
                        items: [
                            {
                                xtype: 'button',
                                text: '<span class="x-footer-title">FILTERS: </span><span class="x-footer-bar">None</span>',
                                margin: '13px 5px 0 0',
                                height: '100%',
                                ui: 'filterBtn',
                                itemId: 'filter',
                                docked: 'left'
                            },
                            {
                                xtype: 'button',
                                margin: '13px 5px 0 0',
                                ui: 'filterBtn',
                                iconCls: 'list1',
                                itemId: 'list',
                                docked: 'right'
                            },
                            {
                                xtype: 'button',
                                margin: '13px 5px 0 0',
                                ui: 'filterBtn',
                                itemId: 'save',
                                iconCls: 'save',
                                docked: 'right'
                            }
                        ]
                    }

                ]
            }
        ]
    }
});