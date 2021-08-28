const express = require('express'),
app = express()
require('dotenv').config()
app.use('/api/',require("./routes/hello"))
app.use('/booklist/',require("./routes/booklist"))
const PORT = process.env.PORT || 3001

app.listen(PORT, ()=>{
    console.log(`Listening on Port: ${PORT}`)
})

if(process.env.NODE_ENV==='production'){
    app.use(express.static("./frontend/build"));
}