const express = require('express');

//EXPRESS APP
const app = express();
//LISTEN FOR REQUESTS
app.listen(3000);

app.get('/', (req, res) => {
//   res.send('<p>Home Page</p>');
res.sendFile('./view/index.html' ,)
});

app.get('/about', (req, res) => {
  res.send('<p>About page</p>');
});
