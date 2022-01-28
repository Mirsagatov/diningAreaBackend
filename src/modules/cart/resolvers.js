const { cartProducts, newCartProduct } = require('./model')
const { verify } = require('../../lib/jwt')

module.exports = {
    Query: {
        cartProducts: async(_, {}, { token }) => {
            const { id: userID } = verify(token)

            if(userID) {
                return await cartProducts(userID)
            }
        }
    },
    Mutation: {
        addToCart: async(_, { productID, productCount }, { token }) => {
            try {
                const { id: userID } = verify(token)

                if(userID) {
                    const cart = await newCartProduct(productID, productCount, userID)

                    if(cart) {
                        return "Ok"
                    }
                }
            } catch(e) {
                console.log(e.message)
            }
        }
    },
    Cart: {
        id: global => global.card_id,
        name: global => global.product_name,
        price: global => global.product_price,
        count: global => global.product_count
    }
}