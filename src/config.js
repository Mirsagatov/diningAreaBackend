const PG = {
    connectionString: 'postgres://wfxzdrmc:U2dIU3z9ZqaZT7fRpf1A2gWT5RAArRzX@abul.db.elephantsql.com/wfxzdrmc'
}
const secretKey = 'dining_area'

const PORT = process.env.PORT || 7000

module.exports = {
    PG,
    secretKey,
    PORT
}