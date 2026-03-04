import { prisma } from "../../../lib/prisma"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const loginAdmin = async(payload:any)=>{
    
    const {email,password} = payload
    const user = await prisma.user.findUnique({
        where:{
            email
        }
    })

    if(!user){
        throw new Error("email not found")
    }
   

    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
          throw new Error("password didnot match")
    }
    

    const jwtPayload = {
        id:user.id,
        email:user.email
    }
    const accessToken = jwt.sign(jwtPayload,"secrect",{expiresIn:"50s"})

    return {
        user,
        accessToken
    }

}



 export const AuthServices = {
    loginAdmin
}