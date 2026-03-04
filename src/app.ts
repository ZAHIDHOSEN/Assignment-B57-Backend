import express from "express"
import cors from "cors"
import { AuthRouter } from "./module/auth/auth.route"



const app = express()


app.use(express.json())
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true,
    })
)

app.use("api/v1/auth",AuthRouter)



app.get("/",(req,res)=>{
    res.send("API is running")
})


app.use((req,res,next)=>{
    res.status(404).json({
     success: false,
    message: "Route Not Found",
    })
})


export default app;