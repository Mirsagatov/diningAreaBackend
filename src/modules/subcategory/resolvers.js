const { subcategories, newSubcategory } = require('./model')

module.exports = {
    Query: {
        subcategories: async(_, { categoryID }) => {
            return await subcategories(categoryID)
        }
    },
    Mutation: {
        newSubcategory: async(_, { name, image, categoryID }) => {
            try {
                const subcategory = await newSubcategory(name, image, categoryID)
                return subcategory
            } catch(error) {
                console.log(error.message)
            }
        }
    },
    SubCategories: {
        id: global => global.sub_category_id,
        name: global => global.sub_category_name,
        image: global => global.sub_category_img
    }
}