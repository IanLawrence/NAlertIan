/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 02.06.14
 * Time: 17:11
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.model.LocalAlert', {
    extend: 'Ext.data.Model',
    config: {
        identifier: 'uuid',

        fields: [
            'result',
            "_id",
            "officeOrField",
            "zeroReport",
            "date",
            "woreda",
            "__v",
            "location",
            "data",
            "diseases",
            "species"
        ],
        idProperty: '_id',
        proxy: {
            type: 'localstorage',
            id: 'alert'
        }
    }
});