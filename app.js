/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/
//@require @packageOverrides
//@require Deft.mixin.Injectable
//@require Deft.mixin.Controllable
Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'Deft': 'packages/deft/src/js',
    'NAlert': 'app'
});
Ext.syncRequire(['Deft.mixin.Injectable', 'Deft.mixin.Controllable']);

Ext.Loader.setConfig({
    disableCaching: false
});
Ext.application({
    name: 'NAlert',

    requires: [
        'Ext.MessageBox',
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging'
    ],

    views: [
        'Main'
    ],
    models: [
        'LocalAlert',
        'LocalFilter',
        'Alert',
        'Wareda',
        'Criteria',
        'Filter'
    ],
    stores: [
        'Alerts',
        'Criterias',
        'LocalAlerts',
        'LocalFilters',
        'Filters'
    ],
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();


        var alerts = Ext.getStore('Alerts'),
            filters = Ext.getStore('Filters'),
            criterias = Ext.getStore('Criterias')
        ;

        Ext.Ajax.request({
            url: 'http://adnis.apps.wookieelabs.com/login',
            method: 'post',
            params: {name: 'admin', password: 'admin'},
            success: function (response, opts) {

                var token = JSON.parse(response.responseText).token;

                alerts.setProxyConfig({Authorization: 'Bearer ' + token});
                filters.setProxyConfig({Authorization: 'Bearer ' + token});
                criterias.setProxyConfig({Authorization: 'Bearer ' + token});
                filters.load();
                alerts.load({
                    callback: function (records, operation, success) {
                        var localAlert = Ext.getStore('LocalAlerts').load();

                        if (!success) {
                            alerts.add(localAlert.getRange());
                        } else {
                            var added;
                            localAlert.removeAll();
                            added = localAlert.add(records);

                            Ext.each(added, function (item) {
                                item.setDirty();
                            });
                            localAlert.sync();
                        }
                    }
                });
                var me = this,
                    platform = 'android',
                    appId = '208878566266'

                ;

               /* Ext.device.Push.register({

                    type: Ext.device.Push.ALERT|Ext.device.Push.BADGE|Ext.device.Push.SOUND,

                    senderID: appId,

                    failure: function (error) {
                    },
                    received: function (notifications) {
                        if (notifications.regid) {
                            Ext.Ajax.request({
                                method: 'POST',
                                url : 'http://adnis.apps.wookieelabs.com/push',
                                params: {"OS": "android", "id": notifications.regid},
                                headers: {
                                    'Authorization': "Bearer " + token
                                },
                                success: function (response) {
                                    if(response.status === 200) {

                                    } else {
                                        var errorMsg = "error: " + JSON.stringify(response, null, 2);
                                    }
                                },
                                failure: function (error) {
                                }


                            });
                        }

                    },
                    success: function () {

                    }
                });*/
            },
            failure: function () {
                var localAlert = Ext.getStore('LocalAlerts').load();

                alerts.add(localAlert.getRange());
            }

        });

        // Initialize the main view
        Ext.Viewport.add(Ext.create('NAlert.view.Main'));

    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
