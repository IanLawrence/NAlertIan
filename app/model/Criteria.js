/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 02.06.14
 * Time: 19:46
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.model.Criteria', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'diseases',
            'species',
            'woredas'
        ],
        proxy: {
            type: 'ajax',
            url : 'http://adnis.apps.wookieelabs.com/api/filtersCriteria',
            reader: {
                type: 'json'
            }
        }
    }
});