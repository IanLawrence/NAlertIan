/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 02.06.14
 * Time: 17:12
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.model.LocalFilter', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'name',
            "filterRow",
            "filters",
            "_id",
            "userId",
            "__v"
        ],
        proxy: {
            type: 'localstorage',
            id: 'filter'
        }
    }
});