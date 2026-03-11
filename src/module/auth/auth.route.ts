import express from "express"
import { AuthController } from "./auth.controller.js"


const router = express.Router()

router.post("/login",AuthController.loginAdmin)
router.get("/me",AuthController.getMe)
router.post("/logout",AuthController.logoutAdmin)
router.post("/refresh-token",AuthController.refreshToken)


export const AuthRouter = router