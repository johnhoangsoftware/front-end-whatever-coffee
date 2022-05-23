const pg = require('pg');
const schema = pg.Schema;

const Store = new schema({
    id: { type: 'serial4', NotNull: true },
    location: { type: 'varchar(50)', default: 0, NotNull: true },
    revenue: { type: 'number', default: 0, NotNull: true },
    fixed_cost: { type: 'Number'},
    img_path: { type: 'Text', NotNull: true},
});

module.exports = pg.model('Store', Store);