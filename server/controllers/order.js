let express = require ('express');
let router = express.Router();

let Order = require('../model/order');

let Store = require('../model/store');
let Cart = Store.Cart;
let Book = Store.Book;


module.exports.displayOrderList=(req, res, next) => {
    Order.find((err, orderList) => {
        if(err)
        {
            return console.error(err);
        }
        else{
            res.json(orderList);
        }
    });
}

module.exports.processAddPage = (req, res, next) => {
    //SERIALIZE THE CART DATA 
    let cart = new Cart();

    //serialize line data
    for(let line of req.body.cart.lines)
    {
        let book = new Book(
            line.book._id,
            line.book.title,
            line.book.description,
            line.book.author,
            line.book.genre,
            line.book.price
        );
        let quantity = line.quantity
        cart.lines.push({book, quantity});
    }
    cart.itemCount = req.body.cart.itemCount;
    cart.cartPrice = req.body.cart.cartPrice;

    //create a  new order object
    let newOrder = Order({
        "name": req.body.name,
        "address":req.body.address,
        "city": req.body.city,
        "province": req.body.province,
        "postalCode": req.body.postalCode,
        "country": req.body.country,
        "shipped": req.body.shipped,
        "cart": cart
    });

    //add new order to db
    Order.create(newOrder, (err, Order) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully added New Order'})
        }
    })

}