//import express 
const express = require('express')

const dataservice = require ('./services/data.services')

//create an app using express

const app = express()

//to parse json
app.use(express.json())

//resolve http reqst from client
//get 
app.get('/',(req,res)=>{
    res.status(404).send(" GET METHOD")
})

//post -to create data

app.post('/',(req,res)=>{
    res.send("Its a Post Method")
})

//bank app - api

//register api

app.post('/register',(req,res)=>{

    const result =dataservice.register(req.body.acno,req.body.password,req.body.uname)

    res.status(result.statusCode).json(result)
})

//login api

app.post('/login',(req,res)=>{

    const result =dataservice.login(req.body.acno,req.body.password)

    res.status(result.statusCode).json(result)
})

//deposit api

app.post('/deposit',(req,res)=>{

    const result =dataservice.deposit(req.body.acno,req.body.password,req.body.amnt)

    res.status(result.statusCode).json(result)
})





//set up the port number

app.listen(3000,()=>{
    console.log("server started at port no:3000");
})