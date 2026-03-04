
import http , {Server} from "http"
import app from './app'
import dotenv from "dotenv"
import {prisma} from "../lib/prisma"


dotenv.config()

let server: Server | null = null;


async function connectToDB(){
    try {
        await prisma.$connect()
        console.log("Db connect successfully")
        
    } catch (error) {
        console.log("DB connection failed")
    }
}


async function startServer() {
  try {
    await connectToDB()
    server = http.createServer(app);
    server.listen(process.env.PORT, () => {
      console.log(`🚀 Server is running on port ${process.env.PORT}`);
    });

  } catch (error) {
    console.error("❌ Error during server startup:", error);
    process.exit(1);
  }
}


startServer()






