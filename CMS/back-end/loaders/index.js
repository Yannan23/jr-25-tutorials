const expressloader = require('./express')
const mongooseLoader = require('./mongoose')

const init = () => {
    //init express
    const expressApp = expressloader();

    //init dbConnection(mongoose)
    const dbConnection = mongooseLoader();
    return { expressApp, dbConnection }
}

const { expressApp, dbConnection } = init()
//export
exports.express = expressApp;
exports.dbConnection = dbConnection;