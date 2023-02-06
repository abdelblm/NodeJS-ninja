const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

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
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); //======>> Middelware

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog 2',
    snippet: 'about my new blog',
    body: 'More about my new blog',
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
// retrive all from db
app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
// get a single blog by Id
app.get('/single-blog', (req, res) => {
  Blog.findById('63da98871984a2a9804d835a')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//routes
app.get('/', (req, res) => {
  // const blogs = [

  //   {
  //     title: 'Yoshi finds eggs',
  //     snippet: 'Lorem ipsum dolor sit amet consectetur',
  //   },
  //   {
  //     title: 'Mario finds stars',
  //     snippet: 'Lorem ipsum dolor sit amet consectetur',
  //   },
  //   {
  //     title: 'How to defeat bowser',
  //     snippet: 'Lorem ipsum dolor sit amet consectetur',
  //   },
  // ];
  //   res.send('<p>Home Page</p>');
  //   res.sendFile('./views/index.html', { root: __dirname });
  // res.render('index', { title: 'Home', blogs });
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  //   res.send('<p>About page</p>');
  //   res.sendFile('./views/about.html', { root: __dirname });
  res.render('about', { title: 'About' });
});

//REDIRECT
// app.get('/about-us', (req, res) => {
//   res.redirect('/about');
// });


// blog routes

//  404 PAGE =======>>>  SHOUL BE ON THE BOTTOM
app.use((req, res) => {
  //   res.status(404).sendFile('./views/404.html', { root: __dirname });
  res.status(404).render('404', { title: '404' });
});
