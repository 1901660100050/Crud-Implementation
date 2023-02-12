const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
require('dotenv').config()

const app=express()
const port=process.env.PORT || 5050
app.use(cors())
app.use(express.json())

// Connecting database using nodejs
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology:true
}

// Connecting to database
const uri="mongodb+srv://COOL45:Test123@cluster0.tcokirm.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(uri, connectionParams)
.then(()=>{
    console.log("connected to database");
}).catch(err=>{
    console.log("Error connecting to database");
})


// USING the routes that we have created

const userRoutes=require('./routes/Users')
app.use('/users', userRoutes)



app.listen(port,()=>{
    console.log("app is listening on ", port);
})

// Defining the model__Schema for the data
// creating route and sending the requests

