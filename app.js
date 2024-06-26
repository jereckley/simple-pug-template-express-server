const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { displayName: 'Jimmy John', appName: 'Best'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
