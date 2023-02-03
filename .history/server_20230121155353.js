const http = require('http')

const server = http.createServer((req, res)=> {
    //set header 
    res.setHeader('content-Type', 'text/html')
})