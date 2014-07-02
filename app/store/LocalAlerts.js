/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 02.06.14
 * Time: 17:10
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.store.LocalAlerts', {
    extend: 'Ext.data.Store',
    config: {
        model: 'NAlert.model.LocalAlert'
    }
});