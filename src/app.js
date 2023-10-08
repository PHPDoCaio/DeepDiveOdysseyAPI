import express from 'express'
import { Database } from './database.js'
import { routes } from './routes.js'
import  cors  from 'cors'

class App {

    constructor() {
        this.express = express()
        this.express.use(cors())

        this.middleware()
        this.routes()
        this.connectDatabase()
    }

    middleware() {
        this.express.use(express.json({ limit: '500mb' }));
    }

    routes() {
        this.express.use(routes)
    }

    async connectDatabase() {
        new Database()
    }
}

export default new App().express