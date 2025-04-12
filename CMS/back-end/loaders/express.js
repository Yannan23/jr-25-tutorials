const express = require('express')
const apiRouter = require('../app/routes/v1/api')
const config = require('../app/config/app')

const startServer = () => {
    const expressApp = express()

    expressApp.listen(8000, (err) => {
        if (err) {
            console.log("Err", err);
        }
        console.log(`Server is running on PORT ${config.port}`);
    })
    return expressApp
}

module.exports = () => {
    const app = startServer();
    app.use(express.json())
    app.use(config.api.prefix, apiRouter)
    return app;
}
