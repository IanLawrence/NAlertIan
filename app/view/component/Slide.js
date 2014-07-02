/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 02.06.14
 * Time: 20:06
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.view.component.Slide', {
    extend: 'Ext.Panel',
    config: {
        name: null,
        cls: 'off',
        width: '100%',
        heigth: '100%',
        fieldList: null,
        items: [
            {
                xtype: 'button',
                ui: 'select',
                itemId: 'select',
                handler: function () {
                    var form = this.up('panel'),
                        cls = form.getCls()[0]
                    ;

                    if (cls === 'off') {
                        this.up('filterForm').fireEvent('slideOn', form.getName());
                        form.replaceCls('off', 'on');
                    } else {
                        form.replaceCls('on', 'off');
                    }
                }
            },
            {
                xtype: 'formpanel',
                cls: 'x-checkbox-panel',
                height: 'auto'
            }
        ]
    },
    constructor: function () {
        this.callParent(arguments);
        var name = this.getName();
        this.down('button').setText(name);
    },
    setCheckBox: function () {
        var fields = this.getFieldList(),
            name = this.getName(),
            checkBoxField = []
        ;

        Ext.each(fields, function (item) {
            checkBoxField.push({
                xtype: 'checkboxfield',
                name : name,
                cls: 'slide-check-box',
                labelAlign: 'right',
                labelWidth: '65%',
                width: '50%',
                label: item.name,
                value: item.key ? {key: item.key} : {name: item.name},
                checked: false
            });
        });
        this.down('formpanel').add(checkBoxField);
    },
    addField: function (field) {
        this.down('formpanel').add(field);
    },
    getValue: function () {
        var data = this.down('formpanel').getValues(),
            name = this.getName(),
            value = data[name],
            values = []
        ;

        if (!value) {
            return '';
        }

        for (var i = 0; i < value.length; i ++) {


            if (value[i]) {
                values.push(value[i]);
            }
        }

        return values;
    }
});