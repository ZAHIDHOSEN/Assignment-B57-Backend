import express from "express"
import cors from "cors"
import { AuthRouter } from "./module/auth/auth.route.js"
import { BlogRoute } from "./module/blog/blog.route.js"
import { ProjectRoute } from "./module/project/project.route.js"
import cookieParser from "cookie-parser"




const app = express()
// app.set("trust proxy",1)


app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
        origin:[
            "http://localhost:3000",
            "https://my-portfolio-lovat-beta-19.vercel.app",
           


        ],
       
        credentials:true,
       
   
    })
)

app.use("/api/v1/auth",AuthRouter)
app.use("/api/v1/blog",BlogRoute)
app.use("/api/v1/project",ProjectRoute)




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