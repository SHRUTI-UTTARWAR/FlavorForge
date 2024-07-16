const express = require("express")
const mongoose = require("mongoose")
const userRouter = require("./routes/user")
const recipeRouter = require("./routes/recipe")
const cors = require("cors")


const PORT = 3000;

const app =express();

app.use(express.json())
app.use(cors({
    origin:true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))


//userRouter
app.use('/api',userRouter)

//reciperouter
app.use('/api',recipeRouter)

mongoose.connect("mongodb+srv://shrutiuttarwar06:AsK4R7cg97yrmKDx@cluster0.t4yrxr2.mongodb.net/",{
    dbName:"RECIPE_APP"
    
}).then(()=>{
    console.log("Mongodb is connected")
}).catch((err)=>
    console.log(err.message)
)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})





//username - shrutiuttarwar06
//password - AsK4R7cg97yrmKDx