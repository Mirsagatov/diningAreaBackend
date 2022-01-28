const { register, userLogin, adminLogin, existedEmail, existedPassword, existedName } = require('./model');
const {sign} = require('../../lib/jwt')

module.exports = {
    Mutation: {
        register: async(_, { name, email, password }) => {
            try {

                const existingEmail = await existedEmail(email)
                const existingPassword = await existedPassword(password)
                const existingUser = await userLogin(name, password)

                if(existingUser) {
                    return "You have already registered. Please log in"
                }
                else if(existingPassword) {
                    return "We already have user with this password. Please, write another one"
                }
                else if(existingEmail) {
                    return "We already have user with this email. Please, write another one"
                }
                else {
                    const user = await register(name, email, password)
                    if(user) {
                        return sign({ id: user.user_id, name: user.user_name})
                    }
                }

            } catch(error) {
                console.log(error.message)
            }
        },
        login: async(_, { name, password }) => {
            try {
                const existingPassword = await existedPassword(password)
                const existingUser = await userLogin(name, password)
                const existingName = await existedName(name)

                if(!existingUser) {
                    return "Incorrect password and name"
                }
                else if(!existingPassword) {
                    return "Inorrect password"
                }
                else if(!existingName) {
                    return "Incorrect name"
                }
                else {
                    
                    const user = await userLogin(name, password)

                    if(user) {
                        return sign({ id: user.user_id, name: user.user_name})
                    }
                }

            } catch(error) {
                console.log(error.message)
            }
        },
        adminLogin: async(_, { name, password }) => {
            try {
                const user = await adminLogin(name, password)

                if(user) {
                    return sign({ id: user.user_id, name: user.user_name})
                }
                return "Incorrect name or password, Please try again"

            } catch(error) {
                console.log(error.message)
            }
        }
    }
}