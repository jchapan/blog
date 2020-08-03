const express = require('express');
const app = express()
const { config } = require('../config')
const mongoose = require('mongoose')

mongoose.connect(
    config.db.url,
    { useNewUrlParser: true, useUnifiedTopology: true },
)
.then(()=> console.log('Connected to DB'))
.catch((err)=> console.log('Error on connection', err))
module.exports = { app }