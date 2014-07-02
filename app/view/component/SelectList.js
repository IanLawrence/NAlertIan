/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 02.07.14
 * Time: 15:04
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.view.component.SelectList', {
    extend: 'Ext.form.FieldSet',
    controller: 'NAlert.controller.SelectListViewController',
    requires: [
        'NAlert.controller.SelectListViewController'
    ],
    xtype: 'autoSelectList',
    config: {
        margin: 0,
        padding: 0,
        store: null,
        recordSet: null,
        width: '100%',
        height: '30vh',
        items: [
            {
                xtype: 'dataview',
                itemTpl: '{name}',
                width: '100%',
                height: '100%',
                itemId: 'selectList'
            },
            {
                xtype: 'button',
                docked: 'top',
                text: 'Add Woreda',
                itemId: 'selectListBtn'
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
        this.down('dataview').setStore(store);
    }
});