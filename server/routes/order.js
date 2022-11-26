let express = require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

let orderController = require('../controllers/order');

//helper function for guard purposes
function requireAuth(req,res,next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

//get order list --read
router.get('/', orderController.displayOrderList);

//post for processing the add order page
router.post('/add', orderController.processAddPage);

module.exports = router;