const express = require('express')
const mysql = require('mysql')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const option = {
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: '3d',
  connectTimeout: 5000,
  multipleStatements: false
}

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let pool
repool()

function repool () {
  pool = mysql.createPool({
    ...option,
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0
  })
  pool.on('error', err => err.code === 'PROTOCOL_CONNECTION_LOST' && setTimeout(repool, 2000))
}

module.exports = pool
