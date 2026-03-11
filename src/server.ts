
import http , {Server} from "http"
import app from './app.js'
import dotenv from "dotenv"
import {prisma} from "../lib/prisma.js"
import { seedAdmin } from "./utilis/seedAdmin.js"


dotenv.config()

// let server: Server | null = null;


// async function connectToDB(){
//     try {
//         await prisma.$connect()
        
//         console.log("Db connect successfully")
        
//     } catch (error) {
//         console.log("DB connection failed")
//     }
// }


// async function startServer() {
//   try {
//     await connectToDB()
//     await seedAdmin()
//     server = http.createServer(app);
//     server.listen(process.env.PORT || 5000, () => {
//       console.log(`🚀 Server is running on port ${process.env.PORT}`);
//     });
    
//   } catch (error) {
//     console.error("❌ Error during server startup:", error);
   
//   }
// }


// (async()=>{
//     await startServer()
//      await seedAdmin()
// })


// startServer()


const PORT = process.env.PORT || 5000;
let server: Server;

async function bootstrap() {
  try {
    // 1. Connect to Database (Stateful: Connection stays open)
    await prisma.$connect();
    console.log("✅ Database connected successfully");

    // 2. Run Startup Tasks (e.g., Seeding)
    await seedAdmin();
    console.log("👤 Admin check/seed completed");

    // 3. Create and Start the Server
    server = http.createServer(app);

    server.listen(PORT, () => {
      console.log(`🚀 Server is humming at http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1); // Exit if the server can't start
  }
}

// Handle Graceful Shutdown (Essential for Stateful Servers)
// This ensures connections are closed before the process kills itself.
const gracefulShutdown = async () => {
  console.log("Shutting down gracefully...");
  if (server) {
    server.close(async () => {
      await prisma.$disconnect();
      console.log("HTTP server and DB connection closed.");
      process.exit(0);
    });
  }
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

bootstrap();















