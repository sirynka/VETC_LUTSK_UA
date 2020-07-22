const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const PORT = process.env.PORT || 8000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/docs/*', (req, res) => res.sendFile(req.url))
    .get('/robots.txt', (req, res) => res.sendFile(path.join(__dirname, 'robots.txt')))
    .get('/', (req, res) => res.render('index', { page: 'main' }))
    .get('*', (req, res) => res.render('index', { page: req.url }))
    .listen(PORT)


if (PORT == 8000)
    require('opn')
        (`http://localhost:${PORT}/`)
