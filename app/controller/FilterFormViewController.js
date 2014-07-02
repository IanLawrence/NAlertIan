/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 02.06.14
 * Time: 20:02
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.controller.FilterFormViewController', {
    extend: 'Deft.mvc.ViewController',
    control: {
        cancel: {
            tap: 'onCancel'
        },
        apply: {
            tap: 'onFilterApply'
        }

    },
    onCancel: function () {
        this.getView().up('navigationview').pop();
    },
    onFilterApply: function () {
        var view = this.getView(),
            value = view.getValue(),
            navigationview = view.up('navigationview')
        ;

        navigationview.down('alertList').getController().generateNewFilter(value);
        navigationview.pop();
    }
});
