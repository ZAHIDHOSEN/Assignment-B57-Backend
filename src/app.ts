import express from "express"
import cors from "cors"
import { AuthRouter } from "./module/auth/auth.route"
import { BlogRoute } from "./module/blog/blog.route"
import { ProjectRoute } from "./module/project/project.route"



const app = express()


app.use(express.json())
app.use(
    cors({
        origin:"http://localhost:3000",
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