const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require('mongoose')
mongoose.set("strictQuery","true")
app.use(express.json())
app.use(cors())


require('dotenv').config()
mongoose.connect(process.env.DBURL)
    console.log("db connected")
app.get('/',(req,res)=>{
    res.setHeader("Access-Controller-Credentials","true"
    res.send('hello ')
})


mongoose.connect

const userRoutes=require('./routes/user.router')
app.use("/users",userRoutes)
const visitRoutes=require('./routes/visit.router')
app.use("/visit",visitRoutes)

app.listen(process.env.PORT,()=>{
   console.log(`app listening on port${process.env.PORT}`
   ) 
})
