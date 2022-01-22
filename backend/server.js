const express = require('express')
const app = express()
const cors = require('cors')
const blogsRoute = require('./routes/blogsRoute.js')
const port = 4000

app.get('/', (req, res) =>{
    res.send(`server is running`)
})

app.use(cors())
app.use('/blogs', blogsRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})