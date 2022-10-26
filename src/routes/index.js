const rutas = require('express').Router()

const { readData } = require('../controllers/index')

rutas.get('/data', readData)

module.exports = rutas