const { newOrder, newOrderDetail, orderDetails } = require('./model')
const { verify } = require('../../lib/jwt')
const { deleteCart } = require('../cart/model')

module.exports = {
    Query: {
        orders: async(_, { orderID }, { token }) => {
            return await orderDetails(orderID)
        }
    },
    Mutation: {
        newOrder: async(_, { address }, { token }) => {
            try {
                const { id: userID } = verify(token)

                if(userID) {
                    const order = await newOrder(address, userID)

                    const cartProducts = await deleteCart(userID)

                    for(let product of cartProducts) {
                        const newDetailedOder = await newOrderDetail(product.product_id, product.product_count, order.order_id)
                        console.log(newDetailedOder)
                    }

                    return order
                }
            } catch(e) {
                console.log(e.message)
            }
        }
    },
    Orders: {
        id: global => global.order_id,
        address: global => global.order_address
    },
    OrderDetails: {
        id: global => global.order_id,
        name: global => global.product_name,
        price: global => global.product_price,
        count: global => global.product_count,
        address: global => global.order_address,
        userName: global => global.user_name,
        image: global => global.product_img
    },
}