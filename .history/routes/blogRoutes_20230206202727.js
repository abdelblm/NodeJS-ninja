const express = require('express');
const router = express.Router();
blogControllers = require('../controllers/blogControllers');



router.get('/', blogControllers.blog_index);

//POST
router.post('/', (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect('/blogs');
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/create', (req, res) => {
  res.render('create', { title: 'Create a new blog ' });
});

router.get('/:id', blogControllers.blog )
//DELETE
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/blogs' });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
