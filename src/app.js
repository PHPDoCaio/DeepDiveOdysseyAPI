import express from 'express'
import bodyParser from 'body-parser'
import { Database } from './database.js'
import { routes } from './routes.js'

class App{
    
    constructor() {
        this.express = express()

        this.middleware()
        this.routes()
        this.connectDatabase()
    }

    middleware() {
        this.express.use(express.json({limit: '500mb'}));
    }   

    routes() {
        this.express.use(routes)
    }

    async connectDatabase() {
        new Database()
    }
}

export default new App().express