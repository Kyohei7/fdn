const express = require ('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const userDetailRoute = require('./routes/UserDetail')

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ 
    limit : '50mb',
    extended: true 
}))

app.use(cors())
app.use('/', userDetailRoute)

app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
})

app.set("view engine", "ejs")
  
// app.get('/', (_request, response) => {response.send('FD-no-2')})
  
app.listen(process.env.API_PORT, () => {
    console.log(`App Listen on Port ${process.env.API_PORT}!`)
})