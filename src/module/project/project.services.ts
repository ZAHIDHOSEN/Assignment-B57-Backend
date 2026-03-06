import { prisma } from "../../../lib/prisma"


export interface ICreateProject {
  title: string
  slug: string
  description: string
  liveUrl?: string
  repoUrl?: string
  thumbnail?: string
  features?: string[]
  authorId: string
}


export interface IUpdateProject {
  title?: string
  slug?: string
  description?: string
  liveUrl?: string
  repoUrl?: string
  thumbnail?: string
  features?: string[]
}


const createProject = async(project:ICreateProject) =>{
    
    const result = await prisma.project.create({
        data:{
            title: project.title,
            slug: project.slug,
            description: project.description,
            liveUrl: project.liveUrl,
            repoUrl: project.repoUrl,
            thumbnail: project.thumbnail,
            features: project.features || [],
            authorId: project.authorId
        },
        include:{
            author:true
        }
    })
    
    return result
}


const updateProject = async(id:string,project:IUpdateProject) =>{
    
    const result = await prisma.project.update({
       where:{
        id
       },
       data:project

    })


    return result
}


const deleteProject = async(id:string) =>{
   const result = await prisma.project.delete({
    where:{
        id
    }
   })

   return result
}



export const ProjectServices = {
    createProject,
    updateProject,
    deleteProject
}