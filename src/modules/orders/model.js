const { fetch, fetchAll } = require('../../lib/postgres')

const ORDERS = `
    SELECT
        order_id
    FROM
        orders
`

const ORDER_DETAILS = `
    SELECT 
        o.order_id,
        p.product_name,
        p.product_img,
        od.product_count,
        o.order_address,
        p.product_price,
        u.user_name
    FROM
        orders o
    INNER JOIN
        order_details od
    ON
        o.order_id = od.order_id
    INNER JOIN
        products p
    ON
        od.product_id = p.product_id
    INNER JOIN
        users u
    ON
        o.user_id = u.user_id
    WHERE
        o.order_id = $1
`

const NEW_ORDER = `
    INSERT INTO
        orders(order_address, user_id)
    VALUES($1, $2)
    RETURNING *
`

const NEW_ORDER_DETAIL = `
    INSERT INTO
        order_details(
            product_id,
            product_count,
            order_id
        )
    VALUES($1, $2, $3)
    RETURNING   *
`

const newOrder = (address, userID) => fetch(NEW_ORDER, address, userID)
const newOrderDetail = (productID, productCount, orderID) => fetch(NEW_ORDER_DETAIL, productID, productCount, orderID)
const orderDetails = (orderID) => fetchAll(ORDER_DETAILS, orderID)

module.exports = {
    newOrder,
    newOrderDetail,
    orderDetails
}