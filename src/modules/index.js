const Categories = require('./categories');
const Authentication = require('./auth')
const SubCategories = require('./subcategory')
const Products = require('./products')
const Cart = require('./cart')
const Orders = require('./orders')

module.exports = [
    Categories,
    Authentication,
    SubCategories,
    Products, 
    Cart,
    Orders
]