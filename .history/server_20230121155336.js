const http = require('http')

const server = http.createServer((req, res)=> {
    res.setHeader('content-Type', 'text')
})