/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 02.07.14
 * Time: 17:40
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.view.Wareda', {
    extend: 'Ext.List',
    xtype: 'autoSelectList',
    //controller: 'NAlert.controller.SaveFilterViewController',
  //  requires: [
  //      'NAlert.controller.SaveFilterViewController'
  //  ],
    config: {
        title: 'WOREDA SELECTION',

        width: '100%',

        height: '100%',

        filter: null,

        selectedRecords: [],

        recordSet: [],

        store: null,

        cls: 'filter-list',

        itemId: 'autoSelectList',

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
                xtype: 'textfield',
                itemId: 'name',
                docked: 'top',
                cls: 'save-text-filed',
                margin: '10px, 10px 0 0',
                placeHolder: 'Pick a woreda',
                listeners: {
                    keyup: function (scope) {
                        this.up('autoSelectList').setRecordSet(scope.getValue());
                    }
                }
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
                        cls: 'cancel',
                        handler: function () {
                            this.up('navigationview').pop();
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'add',
                        cls: 'apply',
                        itemId: 'save',
                        ui: 'filterBar'
                    }
                ]
            }
        ]
    },
    constructor: function () {
        this.callParent(arguments);

        var me = this,
            store = Ext.create('Ext.data.Store', {
                model: 'NAlert.model.Wareda'
            })
            ;
        this.setStore(store);
        this.setRecordSet();
    },
    setRecordSet: function (value) {
        var records = this.config.recordSet,
            result = [],
            store = this.getStore(),
            record
            ;
        if (!store) {
            return;
        }
        store.removeAll();
        if (!value) {
            return result;
        }

        for (var i = 0; i < records.length; i ++) {
            record = records[i];
            if (record.name.search(value) !== -1) {
                result.push(record);
            }
        }

        return store.add(result);
    }
});