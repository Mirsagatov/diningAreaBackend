const { fetch, fetchAll } = require('../../lib/postgres')

const PRODUCTS = `
    SELECT 
        * 
    FROM 
        products
`

const BY_CATEGORY_ID = `
    SELECT 
        * 
    FROM 
        products
    WHERE
        category_id = $1
`

const BY_SUBCATEGORY_ID = `
    SELECT 
        * 
    FROM 
        products
    WHERE
        sub_category_id = $1
`

const NEW_PRODUCT = `
    INSERT INTO
        products(
            product_name,
            product_price,
            product_desc,
            product_img,
            category_id,
            sub_category_id
        )
    VALUES($1, $2, $3, $4, $5, $6)
    RETURNING *
`

const products = () => fetchAll(PRODUCTS)
const byCategory = (categoryID) => fetchAll(BY_CATEGORY_ID, categoryID)
const bySubcategory = (subcategory) => fetchAll(BY_SUBCATEGORY_ID, subcategory)
const newProduct = (
    name, 
    price, 
    desc, 
    image,
    categoryID, 
    subcategoryID
) => fetch(
        NEW_PRODUCT,
        name, 
        price, 
        desc, 
        image,
        categoryID, 
        subcategoryID
    )

module.exports = {
    products,
    newProduct,
    byCategory,
    bySubcategory
}