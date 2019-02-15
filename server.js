const express = require('express')
const path = require('path')
const session = require('express-session')

const routes = require('./routes')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(routes)
app.use(session({secret: 'ninja', saveUninitialized: false, resave: false}))
app.use(express.static(path.join(__dirname, 'public')))

const server = app.listen(3000, _ => {
  console.log('Listening on ' + server.address().port)
})
