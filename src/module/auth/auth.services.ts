import { prisma } from "../../../lib/prisma"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { createAccessToken, createRefreshToken, verifyRefreshToken } from "../../utilis/jwt"

interface LoginPayload {
    email: string
    password: string
}

const loginAdmin = async(payload:LoginPayload)=>{
    
    const {email,password} = payload
    const user = await prisma.user.findUnique({
        where:{
            email
        }
    })

    if(!user){
        throw new Error("user not found")
    }
   

    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
          throw new Error("Invalid password")
    }
    

    const jwtPayload = {
        id:user.id,
        email:user.email
    }
    const accessToken = createAccessToken(jwtPayload)
    const refreshToken = createRefreshToken(jwtPayload)
    return {
        user,
        accessToken,
        refreshToken
    }

}


const getNewAccessToken = async(refreshToken:string)=>{
    const decoded:any = verifyRefreshToken(refreshToken)

    const user = await prisma.user.findUnique({
        where:{id:decoded.id}
    })

      if (!user) {
    throw new Error("User not found")
  }

  const accessToken = createAccessToken({
    id: user.id,
    email: user.email
  })

  return {
    accessToken
  }
}



 export const AuthServices = {
    loginAdmin,
    getNewAccessToken
}