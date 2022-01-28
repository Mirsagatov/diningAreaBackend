const { 
    byCategory,
    bySubcategory,
    products,
    newProduct
} = require('./model')

module.exports = {
    Query: {
        products: async(_, { categoryID, subcategoryID}) => {
            if(categoryID && subcategoryID) return await bySubcategory(subcategoryID)
            if(categoryID) return await byCategory(categoryID)
            if(subcategoryID) return await bySubcategory(subcategoryID)
            return await products()
        }
    },
    Mutation: {
        newProduct: async(_, { detail: { categoryID, subcategoryID, name, price, description, image } }) => {
            try {
                const product = await newProduct(name, price, description, image, categoryID, subcategoryID)
                return product
            } catch(e) {
                console.log(e.message)
            }
        }
    },
    Products: {
        id: global => global.product_id,
        name: global => global.product_name,
        price: global => global.product_price,
        desc: global => global.product_desc,
        image: global => global.product_img
    }
}