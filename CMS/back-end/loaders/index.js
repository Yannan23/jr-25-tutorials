const expressloader = require('./express')

const init = () => {
    //init express
    //init dbConnection(mongoose)
    const expressApp = expressloader();
    return { expressApp }
}

const { expressApp } = init()
//export
exports.express = expressApp;