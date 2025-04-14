const express = require('express')
const config = require('../app/config/app')
const apiRouter = require('../app/routes/v1/api')

const startServer = () => {
    const expressApp = express()
    expressApp.listen(config.port, (e) => {
        if (e) {
            console.log('e', e);
            process.exit()
        }
        console.log(`Server is running on Port ${config.port}`);
    })
    return expressApp
}

module.exports = () => {
    const app = startServer()
    app.use(config.api.prefix, apiRouter)
    return app
}