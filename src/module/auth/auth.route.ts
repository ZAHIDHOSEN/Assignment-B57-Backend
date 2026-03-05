import express from "express"
import { AuthController } from "./auth.controller"


const router = express.Router()

router.post("/login",AuthController.loginAdmin)
router.post("/refresh-token",AuthController.refreshToken)


export const AuthRouter = router