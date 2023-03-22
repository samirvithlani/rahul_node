// const data = require('./calc.js')
// //const sum = require('./func.js')
// const func = require('./func.js')

// console.log(data.name)
// console.log(data.data)
// //sum()
// func.sum()
// var x = func.add(2,3)
// console.log(x)

const express = require('express')
const app = express()

const PORT =3000

//npm i nodemon
app.listen(PORT,()=>{
    console.log('Server is running on port ',PORT)
})

//get post put delete 
//get data from server
//post data to server
//put update data
//delete delete data

app.get('/test',(req,res)=>{

    //res.send('Hello World')
    res.status(201).json({
        name:'Rahul',
        age:20
        
    })
})






