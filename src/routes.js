import { Router } from 'express'
import { Database } from './database.js'

const routes = Router()

routes.get('/plants', async (req, res) => {
    const plants = await Database.plant.findAll()
    res.status = 200
    res.send(plants)
})

routes.get('/animals', async (req, res) => {
    const animals = await Database.animal.findAll()
    res.status = 200
    res.send(animals)
})

routes.get('/plant/:id', async (req, res) => {
    const plant = await Database.plant.findByPk(req.params.id)
    res.status = 200
    res.send(plant)
})

routes.get('/animal/:id', async (req, res) => {
    const animal = await Database.animal.findByPk(req.params.id)
    res.status = 200
    res.send(animal)
})

export {routes}