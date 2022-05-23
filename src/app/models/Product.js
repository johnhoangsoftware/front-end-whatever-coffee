const pg = require('pg');
const schema = pg.Schema;

const Product = new schema({
    name: { type: 'string', default: 'aaaa' },
    price: { type: 'number', default: 0 },
    description: { type: 'string', default: 'bbbb' },
    orderDate: { type: 'date', default: Date.now() }
});

module.exports = pg.model('Product', Product);