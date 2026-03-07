import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"


export const authMiddleware = (req:Request,res:Response,next:NextFunction)=>{

    const token = req.body.token

    if(!token){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_ACCESS_SECRET as string
        ) as {id:string}

        req.user = decoded

        next()
        
    } catch (error) {
        return res.status(401).json({
            message:"Invalid token"
        })
    }
}