const express = require('express');

//EXPRESS APP
const app = express();
//REGISTER VIEW ENGING
app.set('view engine', 'ejs')

//LISTEN FOR REQUESTS
app.listen(3000);
app.use((req,res)=>{
log*
})


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
res.render('index', {title: 'Home', blogs})
});

app.get('/about', (req, res) => {
  //   res.send('<p>About page</p>');
//   res.sendFile('./views/about.html', { root: __dirname });
res.render('about', { title: 'About' });
});
app.get('/blogs/create',(req, res)=>{
    res.render('create', { title: 'Create a new blog '});
})

//REDIRECT
// app.get('/about-us', (req, res) => {
//   res.redirect('/about');
// });

//404 PAGE =======>>>  SHOUL BE ON THE BOTTOM
app.use((req, res) => {
//   res.status(404).sendFile('./views/404.html', { root: __dirname });
res.status(404).render('404', {title: '404'})
});
