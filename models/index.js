const mongoose = require('mongoose')
const computerSchema = require('./computer')
const SmartHomeSchema = require('./smartHome')


const Computer = mongoose.model('computer', computerSchema)
const SmartHome = mongoose.model('SmartHome', SmartHomeSchema)

module.exports = {
    Computer,
    SmartHome
}

