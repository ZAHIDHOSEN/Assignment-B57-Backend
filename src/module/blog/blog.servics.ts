import { prisma } from "../../../lib/prisma";




interface ICreateBlog {
  title: string;
  slug: string;
  content: string;
  thumbnail: string
  authorId: string;
}


interface IUpdateBlog {
  title?: string;
  slug?: string;
  thumbnail?: string
  content?: string;
}


const createBlog = async(payload:ICreateBlog,userId:string) =>{
     const result = await prisma.blog.create({
        data:{
            title:payload.title,
            slug:payload.slug,
            content:payload.content,
            thumbnail:payload.thumbnail,
            authorId: userId
        },
        include:{
            author:true,
        }
     })

     
     return result
}


const getAllBlog = async()=>{
   const result = await prisma.blog.findMany({
    include:{
        author:true
    }
   })

   return result 

}

const blogDetails = async(id:string)=>{
  const result = await prisma.blog.findUnique({
    where:{id},
    include:{
        author:true
    }
  })
  return result

}


const updateBlog = async(id:string,blog:IUpdateBlog) =>{
   
    const result = await prisma.blog.update({
        where:{
            id
        },
        data:blog
    })

    return result
}



const deleteBlog = async(id:string) =>{
     const blog = await prisma.blog.findUnique({
       where: { id }
      })

      if (!blog) {
       throw new Error("Blog not found")
    }

    const result = await prisma.blog.delete({
        where:{
            id
        }
    })
    return result
}




export const BlogServices = {
   createBlog,
   getAllBlog,
   blogDetails,
   updateBlog,
   deleteBlog
}