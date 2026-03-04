// import { prisma } from "../../lib/prisma"
// import bcrypt from "bcrypt"
// export const seedAdmin = async()=>{
//     try {
//         const isAdminExits = await prisma.user.findUnique({email})
//         if(isAdminExits){
//             console.log("admin exits")
//             return
//         }

//         console.log("trying to create super admin")

//         const hashPassword = await bcrypt.hash((process.env.ADMIN_PASS) as string,Number(process.env.BCRYPT_SALT_ROUND))
        
//         // const authProvider = {
//         //     provider:"credential",
//         //     providerId:process.env.ADMIN_EMAIL
//         // }


//     } catch (error) {
//         console.log(error)
//     }
// }