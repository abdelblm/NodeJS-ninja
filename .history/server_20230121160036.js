const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //set header content type
  res.setHeader('content-Type', 'text/html');

  // send an html file
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
    //   res.write(data);
      res.end(data);
    }
  });
});
server.listen(3000, 'locallhost', ()=>{
console.log(1);
})