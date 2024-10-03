//Third-party Imports
const express = require("express")
const bodyParser = require('body-parser');
const path = require("path")
const cors = require("cors")
// const Sequelize = require("sequelize")

const app =  express()

//Custom Imports
const sequelize = require("./Database/database")
const rootDir = require("./Utilities/path")
const user =  require("./Models/booking")

app.use(cors())

app.use(bodyParser.json());


app.get("/",(req,res,next)=>{

     user.findAll().then(result => {
        res.json(result)
     }).catch(err =>  console.log(err))
    
    
})

app.post("/",(req,res,next)=>{
    const data = req.body
    user.create(data)
    res.redirect("/")
})


sequelize.sync().then((result)=>{
    app.listen(4000,()=>{
        console.log('Server is online at http://localhost:4000/ ')
    })
}).catch( err => console.log(err))

