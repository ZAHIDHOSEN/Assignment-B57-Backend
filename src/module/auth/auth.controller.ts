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



export const AuthController = {
    loginAdmin
}