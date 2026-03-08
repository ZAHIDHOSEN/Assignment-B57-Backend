import { Request, Response } from "express"
import { AuthServices } from "./auth.services"
import {prisma} from "../../../lib/prisma"


const loginAdmin = async(req:Request,res:Response)=>{
    try {
        const payload = req.body
       const result = await AuthServices.loginAdmin(payload)
       res.cookie("accessToken", result.accessToken, {
       httpOnly: true,
       secure: false,
       sameSite:"lax"
       })
       res.status(200).json(result)
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

const logoutAdmin = async(req:Request,res:Response)=>{
  try {
     await AuthServices.logoutAdmin();

     res.clearCookie("accessToken",{
       httpOnly:true,
       secure:false,  //true in production
       sameSite:"lax"
     })
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}


const getMe = async(req:Request,res:Response)=>{
  
  try {
    const userId = req.user?.id as string
    const result = await AuthServices.getMe(userId)
    res.status(200).json(result)
  } catch (error) {
     console.log(error)
     res.status(500).send(error)
  }
}

const refreshToken = async (req: Request, res: Response) => {

  try {

    const token = req.headers.authorization

    if (!token) {
      throw new Error("Refresh token required")
    }

    const result = await AuthServices.getNewAccessToken(token)

    res.status(200).json({
      success: true,
      data: result
    })

  } catch (error: any) {

    res.status(401).json({
      success: false,
      message: error.message
    })

  }

}



export const AuthController = {
    loginAdmin,
    logoutAdmin,
    refreshToken,
    getMe
}