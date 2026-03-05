import { Request, Response } from "express"
import { AuthServices } from "./auth.services"
import {prisma} from "../../../lib/prisma"


const loginAdmin = async(req:Request,res:Response)=>{
    try {
        const payload = req.body
       const result = await AuthServices.loginAdmin(payload)
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
    refreshToken
}