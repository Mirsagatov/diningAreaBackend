const { fetch, fetchAll } = require('../../lib/postgres')

const SUBCATEGORIES = `
    SELECT 
        * 
    FROM 
        sub_categories
    WHERE
        category_id = $1
`

const NEW_SUBCATEGORY = `
    INSERT INTO
        sub_categories(sub_category_name, sub_category_img, category_id)
    VALUES($1, $2, $3)
    RETURNING *
`

const subcategories = (categoryID) => fetchAll(SUBCATEGORIES, categoryID)
const newSubcategory = (name, image, categoryID) => fetch(NEW_SUBCATEGORY, name, image, categoryID)

module.exports = {
    subcategories,
    newSubcategory
}