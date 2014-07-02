/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 02.06.14
 * Time: 13:39
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.store.Alerts', {
    extend: 'Ext.data.Store',
    config: {
        model: 'NAlert.model.Alert',
        clearOnPageLoad: false,
        listeners: {
            load: function (scope, records, successful) {
                if (this.currentPage > 1 && !successful ) {
                    Ext.Msg.alert('Failure', 'failed to load page #' + this.currentPage);
                    this.currentPage = 1;
                }
            }
        }
    },
    setProxyConfig: function (header) {
        var proxy = this.getModel().getProxy();

        proxy.setHeaders(header);
    },
    setFilter: function (filter) {
        var proxy = this.getModel().getProxy();
        proxy.setExtraParams(filter);
    }

});