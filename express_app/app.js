const express = require('express')
const app = express()
const pool = require('./dao/connect')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const route = require('./routers/indexRouter')

app.all('*', (req, res, next) => {
  next()
})

app.all('/', (req, res) => {
  pool.getConnection((_err, conn) => {
    res.json({ a: 'b' })
    conn.release()
  })
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'static')))
app.engine('html', require('express-art-template'))
app.set('view options', {
  debug: process.env.NODE_ENV !== 'production'
})

app.use(route)

app.use('/filename', express.static(path.join(process.cwd(), './public')))

app.listen(80, () => console.log('服务器启动'))
