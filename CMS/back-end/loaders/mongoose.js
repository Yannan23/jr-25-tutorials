const mongoose = require('mongoose')
const config = require('../app/config/app')

module.exports = async () => {
    const connection = await mongoose.connect(config.dbUrl)
    return connection.connection.db

}