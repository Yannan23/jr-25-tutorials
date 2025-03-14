const dotenv = require('dotenv')
dotenv.config();
process.env.NODE_ENV = process.env.NODE_ENV ?? "dev";

module.exports = {
    port: process.env.PORT,
    api: {
        prefix: process.env.prefix ?? "/api/v1",
    },
    dbUrl: process.env.MONDODB_URL
}