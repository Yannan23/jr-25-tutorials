const expressloader = require('./express')
const mongooseloader = require('./mongoose')

const init = () => {
    //init express
    //init dbConnection(mongoose)
    const dbConnection = mongooseloader();
    const expressApp = expressloader();
    return { expressApp, dbConnection }
}

const { expressApp, dbConnection } = init()
//export
exports.express = expressApp;
exports.dbConnection = dbConnection