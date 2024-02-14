const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')
const PORT = process.env.PORT || 3001
const Controller1 = require('./controllers/Controller1')
const computerController = require('./controllers/computerController')
const TvController = require('./controllers/tvController')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('welcome to our landing page!'))

app.get('/tv', TvController.getAllTvs)

app.get('/tv/:id', TvController.getTvById)

app.post('/tv', TvController.createTv)

app.put('/tv/:id', TvController.updateTv)

app.delete('/tv/:id', TvController.deleteTv)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


//\\\\\\\\\\\\\\[==== Start =|=  Denesh - Service scripts =======]||||||||||||

app.get('/computers',computerController.getAllComputer)

app.get('/computers/:id',computerController.getComputersById)

app.post('/computers',computerController.createComputer)

app.put('/computers/:id',computerController.updateComputer)

app.delete('/computers/:id',computerController.deleteComputer)
//\\\\\\\\\\\\\\[==== End =|=  Denesh - Service scripts =======]||||||||||||