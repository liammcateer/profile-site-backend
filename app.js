const path = require('path');
require('dotenv').config({path: path.join(__dirname, 'config', '.env')})
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
var cors = require('cors');
var apiRouter = require('./api/apiRouter')

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api', apiRouter)

app.listen(port, () => console.log("App listening on port " + port))