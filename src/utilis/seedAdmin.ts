import { prisma } from "../../lib/prisma.js"
import bcrypt from "bcrypt"


export const seedAdmin = async()=>{
    try {
        const email = process.env.ADMIN_EMAIL!
        const password = process.env.ADMIN_PASS!
        const salt = Number(process.env.BCRYPT_SALT_ROUND)

        const existingEmail = await prisma.user.findUnique({
            where : {
                email
            }
        })

        if(existingEmail){
            console.log("admin already exits")
            return
        }

        const hashPassword = await bcrypt.hash(password,salt)

       
        const user = await prisma.user.create({
            data:{
                name:"zahid",
                email,
                password:hashPassword
            }

        })
        console.log("Admin created successfully")
    } catch (error) {
        console.error("error in seed admin",error)
        
    }
} 