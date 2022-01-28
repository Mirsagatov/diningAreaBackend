const { fetch, fetchAll } = require('../../lib/postgres');

const CATEGORIES = `
    SELECT 
        *
    FROM 
        categories
`
const NEW_CATEGORY = `
    INSERT INTO
        categories(category_name, category_img)
    VALUES($1, $2)
    RETURNING *
`
const categories = () => fetchAll(CATEGORIES);
const newCategory = (name, image) => fetch(NEW_CATEGORY, name, image);

module.exports = {
    categories,
    newCategory
}