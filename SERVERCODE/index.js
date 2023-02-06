// DEPENDENCIES
let express = require('express')
let mongoose = require('mongoose')
let body_parser = require('body-parser')
let cors = require('cors')
const { response } = require('express')
//--------------------------------------------------------------
let app = express()

const route = require('./route/routes.js')


//------------ CONNECTING TO MONGO DB --------------------------

mongoose.connect('mongodb://127.0.0.1:27017/shoopinglists');
mongoose.connection.on('connected', () =>{

    console.log("Connection sucessfully")
})

mongoose.connection.on('error', (err)=> {

    console.log(err)
})

//----------------------- MIDDLEWARE -----------------------------
app.use(cors())

app.use(body_parser.json())

app.use('/api', route)


//---------------------SERVER--------------------------------------
const port = 3000;

app.listen(port, ()=>{
    console.log("Server running on port: ", port)
})

//------------------Testing the route----------------------------

app.get('/', (request, response) =>{
    response.send("Roger I am here dude")
})


