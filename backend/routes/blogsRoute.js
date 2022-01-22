const express = require('express');
const blogs = require('../data');
const router = express.Router();

router.get('/', (req, res) =>{
    res.json(blogs).status(200);
})

//--------- blog id ---------//
router.get('/:id', (req, res) =>{
    const { id } = req.params;
    const newBlog = blogs.filter(item => item.id == id)
    res.json(newBlog).status(200);
})
//------------ insert data -----------//
router.post('/', (req, res) =>{
    // const latestBlog = req.body;
    // console.log(latestBlog);
    // res.json(latestBlog).status(201)
    res.send("Blog added")
})
//----------- delete blog -------------//

router.delete('/blogs/:id', (req, res)=> {
    res.send('Got a DELETE request at /blog')
  })
module.exports = router;