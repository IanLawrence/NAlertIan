/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 02.06.14
 * Time: 17:24
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.controller.AlertListViewController', {
    extend: 'Deft.mvc.ViewController',
    control: {
        list: {
            tap: 'onListOpen'
        },
        filter: {
            tap: 'onFilterTap'
        },
        save: {
            tap: 'onFilterSave'
        }

    },
    onFilterSave: function () {
        var filter = this.getView().getFilter();
        if (!filter) {
            Ext.Msg.alert('There is no selected filters');
            return false;
        }

        var filterList = Ext.create('NAlert.view.SaveFilter', {
            filter: filter
        });
        this.getView().up('navigationview').push(filterList);
        return true;

    },
    onListOpen: function () {
        var me = this;
        Ext.getStore('Filters').load({callback: function (records, operation, success) {
            if (!success) {
                Ext.Msg.alert('missing network connection');
            } else {
                var filterList = Ext.create('NAlert.view.FilterList');
                me.getView().up('navigationview').push(filterList);
            }
        }});


    },
    onFilterTap: function () {
        var me = this;
        Ext.getStore('Criterias').load({callback: function (records, operation, success) {
            if (!success) {
                Ext.Msg.alert('missing network connection');
                return false;
            }
            var view = Ext.create('NAlert.view.FilterForm');
            me.getView().up('navigationview').push(view);

            var forms = view.getForms();
            Ext.each(forms, function (item) {
                item.setCheckBox();
            });
        }});
    },
    generateNewFilter: function (value) {
        var filter = JSON.stringify(value),
            model = Ext.create('NAlert.model.Filter', {
                filters: filter
            })
        ;

        model.generateFilterRow();
        this.setFilter(model);
    },
    setFilter: function (value) {
        var alerts = Ext.getStore('Alerts'),
            view = this.getView(),
            filter = value.get('filters'),
            filterRow = value.get('filterRow')
        ;

        if (Ext.isObject(filter)) {
            filter = JSON.stringify(filter);
        }
        alerts.setFilter({filters: filter});
        alerts.removeAll();
        alerts.load({
            callback: function (records, operation, success) {
                var localAlert = Ext.getStore('LocalAlerts').load();

                if (!success) {
                    Ext.Msg.alert('Failed to apply filter');
                    alerts.add(localAlert.getRange());
                } else {
                    var added;
                    localAlert.removeAll();
                    added = localAlert.add(records);

                    Ext.each(added, function (item) {
                        item.setDirty();
                    });

                    localAlert.sync();
                    view.setFilter(value);

                    var button = view.down('button[itemId=filter]');
                    button.setText('<div class="x-footer-title">FILTERS:</div> <div class="x-footer-title">' + filterRow +  ' </div>');
                }
            }
        });
    }
});