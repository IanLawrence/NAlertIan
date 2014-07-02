Ext.define('NAlert.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
        'NAlert.view.AlertList'
    ],
    config: {
        backButton: null,
        navigationBar: {
            ui: 'nalert',
            height: '60px'
        },
        width: '100%',
        height: '100%',
        items: [
            {
                xtype: 'alertList'
            }
        ]
    }
});
