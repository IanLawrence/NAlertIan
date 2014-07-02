/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 02.07.14
 * Time: 19:26
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.controller.SelectListViewController', {
    extend: 'Deft.mvc.ViewController',
    control: {
        selectListBtn: {
            tap: 'onSelect'
        }
    },
    onSelect: function () {
        var criteries = Ext.getStore('Criterias').getAt(0),
            recordSet = this.getView().down('list').getStore().getRange(),
            woredas = criteries.get('woredas')
        ;
        Ext.each(recordSet, function (item) {
            Ext.Array.remove(woredas, item);
        });

        var field = Ext.create('NAlert.view.Wareda', {
            recordSet: woredas
        });
        this.getView().up('navigationview').push(field);
    }
});
