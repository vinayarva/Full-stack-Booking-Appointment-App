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
const user =  require("./Models/booking");
const { where } = require("sequelize");

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
    res.sendStatus(200)
})

app.delete("/delete/:id",(req,res,next)=>{
    const userid = req.params.id

    user.destroy({ where: { id: userid}}).then(res=>console.log(res)).catch(err => console.log(err))

    res.sendStatus(200)
})

app.put("/edit/:id",(req,res,next)=>{
    
    const user_id = req.params.id

    user.findByPk(user_id).then((result)=>{
        result.username =  req.body.username
        result.phoneNumber =  req.body.phoneNumber
        result.email =  req.body.email
        return result.save()

    }).catch(err=> console.log(err))

    res.sendStatus(200)
})


sequelize.sync().then((result)=>{
    app.listen(4000,()=>{
        console.log('Server is online at http://localhost:4000/ ')
    })
}).catch( err => console.log(err))

