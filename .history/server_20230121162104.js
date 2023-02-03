const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  //set header content type
  res.setHeader('Content-Type', 'text/html');
  let path = './views/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';

    default:
      break;
  }
  // send an html file
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});
server.listen(3000, 'localhost', () => {
  console.log(`App available on http://localhost:3000`);
});
