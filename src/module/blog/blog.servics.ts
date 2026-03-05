import { prisma } from "../../../lib/prisma";




interface ICreateBlog {
  title: string;
  slug: string;
  content: string;
  authorId: string;
}


interface IUpdateBlog {
  title?: string;
  slug?: string;
  content?: string;
}


const createBlog = async(payload:ICreateBlog) =>{
     const result = await prisma.blog.create({
        data:{
            title:payload.title,
            slug:payload.slug,
            content:payload.content,
           authorId: payload.authorId,
        },
        include:{
            author:true,
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
   updateBlog,
   deleteBlog
}