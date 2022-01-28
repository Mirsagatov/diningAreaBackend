const { fetch, fetchAll } = require('../../lib/postgres');

const REGISTER = `
    INSERT INTO
        users(user_name, user_email, user_password)
    VALUES($1, $2, $3)
    RETURNING *
`

const USER_LOGIN = `
    SELECT 
        user_id,
        user_name,
        user_password
    FROM
        users
    WHERE
        user_name = $1
    AND
        user_password = $2
    AND 
        is_admin = false
`
const ADMIN_LOGIN = `
    SELECT 
        user_id,
        user_name,
        user_password
    FROM
        users
    WHERE
        user_name = $1
    AND
        user_password = $2
    AND
        is_admin = true
`

const EXISTED_PASSWORD = `
    SELECT 
        user_id,
        user_name,
        user_password
    FROM
        users
    WHERE
        user_password = $1
    AND
        is_admin = false
`

const EXISTED_EMAIL = `
    SELECT 
        user_id,
        user_name,
        user_password
    FROM
        users
    WHERE
        user_email = $1
    AND
        is_admin = false
`
const EXISTED_NAME = `
    SELECT 
        user_id,
        user_name,
        user_password
    FROM
        users
    WHERE
        user_name = $1
    AND
        is_admin = false
`

const register = (name, email, password) => fetch(REGISTER, name, email, password)
const userLogin = (name, password) => fetch(USER_LOGIN, name, password)
const adminLogin = (name, password) => fetch(ADMIN_LOGIN, name, password)

const existedEmail = (email) => fetch(EXISTED_EMAIL, email)
const existedPassword = (password) => fetch(EXISTED_PASSWORD, password)
const existedName = (name) => fetch(EXISTED_NAME, name)



module.exports = {
    register,
    userLogin,
    adminLogin,
    existedPassword,
    existedEmail,
    existedName
}