/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 02.06.14
 * Time: 17:53
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.controller.FilterListViewController', {
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
            selected = view.getSelection()[0],
            navigationview = view.up('navigationview')
        ;

        if (selected) {
            navigationview.down('alertList').getController().setFilter(selected);
            navigationview.pop();
        } else {
            Ext.Msg.alert('filter not selected yet');
        }

    }
});
