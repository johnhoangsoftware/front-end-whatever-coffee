const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Product = new schema({
    name: { type: 'string', default: 'aaaa' },
    price: { type: 'number', default: 0 },
    description: { type: 'string', default: 'bbbb' },
    orderDate: { type: 'date', default: Date.now() }
});

module.exports = mongoose.model('Product', Product);