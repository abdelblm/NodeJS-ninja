const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=> {

    //set header content type
    res.setHeader('content-Type', 'text/html')

    // send an html file
    fs.readFile('./views/index.html', )
})