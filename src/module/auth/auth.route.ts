import express from "express"
import { AuthController } from "./auth.controller"


const router = express.Router()

router.post("/login",AuthController.loginAdmin)



export const AuthRouter = router