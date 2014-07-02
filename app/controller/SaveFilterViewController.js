/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 03.06.14
 * Time: 18:38
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NAlert.controller.SaveFilterViewController', {
    extend: 'Deft.mvc.ViewController',
    control: {
        cancel: {
            tap: 'onCancel'
        },
        save: {
            tap: 'onFilterSave'
        },
        view: {
            select: 'onSaveSelect'
        }

    },
    onSaveSelect: function (self, record) {
        var view = this.getView(),
            filter = view.getFilter()
        ;

        record.set('filters', filter.get('filter'));
        record.set('filterRow', filter.get('filterRow'));

        record.save();
        view.up('navigationview').pop();
    },
    onCancel: function () {
        this.getView().up('navigationview').pop();
    },
    onFilterSave: function () {
        var view = this.getView(),
            text = view.down('textfield').getValue()
        ;


        if (!text) {
            Ext.Msg.alert('filter not named yet');
            return;
        }

        var filter = view.getFilter();
        filter.set('name', text);
        filter.set('_id', null);

        filter.save();

        view.up('navigationview').pop();
    }
});
