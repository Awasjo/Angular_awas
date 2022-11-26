let mongoose = require('mongoose');
let bookModel = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    author: String,
    genre: String

},

{
    collection:"books"
});

module.exports = mongoose.model('book',bookModel);