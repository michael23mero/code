const rutas = require('express').Router()
const axios = require('axios')

const URL = 'http://localhost:3000/api/v1'

rutas.get('/', (req, res) => {
    axios.get(`${URL}/data`, {
    }).then(resp => {
        res.render('index', {user: resp.data})
    }).catch(err => { res.send('Not Found')})
})

module.exports = rutas