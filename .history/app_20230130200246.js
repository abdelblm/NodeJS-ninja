const express = require('express');

//EXPRESS APP
const app = express();
//LISTEN FOR REQUESTS
app.listen(3000);

app.get('/', (req, res) => {
  //   res.send('<p>Home Page</p>');
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  //   res.send('<p>About page</p>');
  res.sendFile('./views/about.html', { root: __dirname });
});

//REDIRECT
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

//404 PAGE =======>>>  SHOUL BE ON THE BOTTOM
app.use((req, res) => {
  res.status( ) sendFile('./views/404.html', { root: __dirname });
});
