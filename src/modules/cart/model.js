const { fetch, fetchAll } = require('../../lib/postgres')

const CART_PRODUCTS = `
    SELECT 
        p.product_id,
        p.product_name,
        p.product_price,
        p.product_img,
        c.card_id,
        c.product_id,
        c.product_count,
        c.user_id
    FROM 
        products p
    INNER JOIN
        cart c
    ON
        p.product_id = c.product_id
    WHERE
        c.user_id = $1
`

const NEW_CART_PRODUCT = `
    INSERT INTO
        cart(product_id, product_count, user_id)
    VALUES($1, $2, $3)
    RETURNING *
`

const DELETE_PRODUCT = `
    DELETE 
        FROM
    cart
        WHERE
    user_id = $1
    RETURNING 
        * 
`

const cartProducts = (userID) => fetchAll(CART_PRODUCTS, userID)
const newCartProduct = (productID, count, userID) => fetch(NEW_CART_PRODUCT, productID, count, userID)
const deleteCart = (userID) => fetchAll(DELETE_PRODUCT, userID)

module.exports = {
    cartProducts,
    newCartProduct,
    deleteCart
}