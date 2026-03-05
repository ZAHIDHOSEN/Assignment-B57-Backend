import jwt from "jsonwebtoken"



export const createAccessToken = (payload:object)=>{
   
    return jwt.sign(
        payload,
        process.env.JWT_ACCESS_SECRET!,
        {expiresIn:process.env.JWT_ACCESS_EXPIRES as jwt.SignOptions["expiresIn"]}

    )
}


export const createRefreshToken = (payload: object) => {
  return jwt.sign(
    payload,
    process.env.JWT_REFRESH_SECRET!,
    { expiresIn: process.env.JWT_REFRESH_EXPIRES as jwt.SignOptions["expiresIn"]}
  )
}


export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET!)
}