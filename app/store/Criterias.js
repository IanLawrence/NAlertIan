/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 02.06.14
 * Time: 19:55
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.store.Criterias', {
    extend: 'Ext.data.Store',
    config: {
        model: 'NAlert.model.Criteria',
        clearOnPageLoad: false
    },
    setProxyConfig: function (header) {
        var proxy = this.getModel().getProxy();

        proxy.setHeaders(header);

    }

});