const express = require('express')
const path = require('path')

class Servidor{
    constructor() {
        this.app = express()
        this.port = process.env.PORT

        require('./config/dbc').dbc()

        this.middlewares()
        this.routes()
        this.views()
    }

    middlewares(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: false}))
    }

    routes(){
        this.app.use('/api/v1', require('./routes'))
        this.app.use(require('./routes/home.routes'))
    }

    views(){
        this.app.set('views', path.join(__dirname, 'views'))
        this.app.set('view engine', 'hbs')
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server listening on ${this.port}`)
        })
    }
}

module.exports = Servidor
