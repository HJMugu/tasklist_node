const express = require("express")
const app = express()

//add template engine
const path = require("path")
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(3002)