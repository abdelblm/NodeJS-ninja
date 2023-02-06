// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const Blog = require("../models/blog");

const blog_index = () =>{
     Blog.find()
       .sort({ createdAt: -1 })
       .then((result) => {
         res.render('index', { title: 'All blogs', blogs: result });
       })
       .catch((err) => {
         console.log(err);
       });
}

module.exports{
    blog_index
}