/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 02.06.14
 * Time: 16:01
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.store.Filters', {
    extend: 'Ext.data.Store',
    config: {
        model: 'NAlert.model.Filter'
    },
    setProxyConfig: function (header) {
        var proxy = this.getModel().getProxy();

        proxy.setHeaders(header);

    }
});