/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 02.06.14
 * Time: 13:39
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.model.Alert', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'result',
            "_id",
            "officeOrField",
            "zeroReport",
            "date",
            "woreda",
            "location",
            "data",
            "diseases",
            "species"
        ],
        idProperty: '_id',

        proxy: {
            type: 'ajax',
            url : 'http://adnis.apps.wookieelabs.com/api/filterReports',
            reader: {
                    type: "json",
                    rootProperty: "reports"
            }
        }
    }
});