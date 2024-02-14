const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const db = require('./db')
const PORT = process.env.PORT || 3001
const TvController = require('./controllers/tvController')

// import Smart Home controllers
const SmartHomeController = require('./controllers/smartHomeController')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('welcome to our landing page!'))

app.get('/tv', TvController.getAllTvs)

app.get('/tv/:id', TvController.getTvById)

app.post('/tv', TvController.createTv)

app.put('/tv/:id', TvController.updateTv)

app.delete('/tv/:id', TvController.deleteTv)

// Smart Home Routes
app.get('/smarthome', SmartHomeController.getAllSmartHome)
app.get('/smarthome/:id', SmartHomeController.getAllSmartHome)
app.post('/smarthome', SmartHomeController.createSmartHome)
app.put('/smarthome/:id', SmartHomeController.updateSmartHome)
app.delete('/plants/:id', SmartHomeController.deleteSmartHome)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
