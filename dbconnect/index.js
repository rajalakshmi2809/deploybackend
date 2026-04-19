import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import authRoute from "./routes/authRoute.js"
import connectdb from "./config/db.js"




dotenv.config()

connectdb()


const app = express()

app.use(cors())
app.use(express.json())



app.use("/api/user",authRoute)
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{

console.log(`server connected http://localhost:${PORT}`)

})


// http://localhost:5000/api/user








