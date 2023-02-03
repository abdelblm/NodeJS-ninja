const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

//EXPRESS APP
const app = express();


//Connect to mongodb
const dbURI =
  'mongodb+srv://abdelaziz:jaysean@ninjatuts.yyf7blx.mongodb.net/ninja-tuts?retryWrites=true&w=majority';

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

  

//REGISTER VIEW ENGING
app.set('view engine', 'ejs');

//Middelware & Static Files
app.use(express.static('public'));
app.use(morgan('dev')); //======>> Middelware

app.get('/', (req, res) => {
  const blogs = [
    {
      title: 'Yoshi finds eggs',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Mario finds stars',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'How to defeat bowser',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
  ];
  //   res.send('<p>Home Page</p>');
  //   res.sendFile('./views/index.html', { root: __dirname });
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  //   res.send('<p>About page</p>');
  //   res.sendFile('./views/about.html', { root: __dirname });
  res.render('about', { title: 'About' });
});
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog ' });
});

//REDIRECT
// app.get('/about-us', (req, res) => {
//   res.redirect('/about');
// });

//404 PAGE =======>>>  SHOUL BE ON THE BOTTOM
app.use((req, res) => {
  //   res.status(404).sendFile('./views/404.html', { root: __dirname });
  res.status(404).render('404', { title: '404' });
});
