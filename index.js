const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('index', { page: 'main' }))
    .get('/docs/*', (req, res) => res.sendFile(req.url))
    .get('*', (req, res) => res.render('index', { page: req.url }))
    .listen(PORT)

if (PORT == 8000)
    require('opn')
        (`http://localhost:${PORT}/`)
