const { categories, newCategory } = require('./model');

module.exports = {
    Query: {
        categories: async() => {
            return await categories();
        }
    },
    Mutation: {
        newCategory: async(_, {name, image}) => {
            try {
                const category = await newCategory(name, image);
                return category;
            } catch(error) {
                console.log(error.message);
            }
        }
    },
    Categories: {
        id: global => global.category_id,
        name: global => global.category_name,
        image: global => global.category_img
    }
}