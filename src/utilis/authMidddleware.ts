import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const token = req.cookies?.accessToken
  // console.log("cookies",req.cookies);
  // console.log("token",req.cookies?.accessToken)

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized"
    })
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET as string
    ) as { id: string }

    req.user = decoded
    console.log(req.user)

    next()

  } catch (error) {
    return res.status(401).json({
      message: "Invalid token"
    })
  }
}