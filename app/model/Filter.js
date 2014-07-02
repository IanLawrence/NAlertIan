/**
 * Created with JetBrains WebStorm.
 * User: kanuny
 * Date: 02.06.14
 * Time: 16:02
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NAlert.model.Filter', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'name',
            "filterRow",
            "filters",
            "_id",
            "userId"
        ],
        idProperty: '_id',
        proxy: {
            type: 'rest',
            startParam: false,
            sortParam: 'undefined',
            pageParam: false,
            limitParam: false,
            url : 'http://adnis.apps.wookieelabs.com/api/filters',
            reader: {
                type: 'json'
            }
        }
    },
    generateFilterRow: function () {
        var filters = this.get('filters'),
            filterRow = ''
        ;

        filters = JSON.parse(filters);

        if (filters.diseases) {
            filterRow += filters.diseases[0].key + ' ... ,';
        }
        if (filters.species) {
            filterRow += filters.species[0].key + ' ... ,';
        }
        if (filters.timeFrame) {
            filterRow += filters.timeFrame + ' ... ,';
        }
        if (filters.woredas) {
            filterRow += filters.woredas[0].name + ' ... ';
        }
        this.set('filterRow', filterRow);
        return filterRow;
    }
});