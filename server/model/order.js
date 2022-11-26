let mongoose= require('mongoose');

//create order model class
let Order = mongoose.Schema({
    name: String,
    address: String,
    city: String,
    province: String,
    postalCode: String,
    country: String,
    shipped: Boolean,
    cart:
    {
        lines:
        [{book:
            {
                title: String,
                description: String,
                price: Number,
                author: String,
                genre: String
            },
            quantity: Number
        }],
        itemCount: Number,
        cartPrice: Number
    }
},
{
    collections: ' orders'
});

module.exports = mongoose.model('Order',Order);