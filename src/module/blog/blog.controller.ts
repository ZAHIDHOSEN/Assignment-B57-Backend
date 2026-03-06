import { Request, Response } from "express"
import { prisma } from "../../../lib/prisma"
import { BlogServices } from "./blog.servics"




const createBlog = async(req:Request,res:Response) =>{
    try {

       const payload = req.body 
       const result = await BlogServices.createBlog(payload)
       res.status(200).json(result)

        
    } catch (error) {
        console.log(error)
          res.status(500).send(error)
    }
}

const getAllBlog = async(req:Request,res:Response)=>{
    try {
        const result = await BlogServices.getAllBlog()
        res.status(200).json(result)
    } catch (error) {
          console.log(error)
          res.status(500).send(error)
    }
}
const blogDetails = async(req:Request,res:Response)=>{
    try {
        const id = req.params.id as string
        const result = await BlogServices.blogDetails(id)
        res.status(200).json(result)
        
    } catch (error) {
          console.log(error)
          res.status(500).send(error)
    }
}


const updateBlog = async(req:Request,res:Response) =>{
    try {
        const id = (req.params.id )as string
        const blog  = req.body
        
        const result = await BlogServices.updateBlog(id,blog)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
        
    }
}


const deleteBlog = async(req:Request,res:Response) =>{
    try {
        const id = (req.params.id )as string
        const result = await BlogServices.deleteBlog(id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}



export const BlogController = {
    createBlog,
    getAllBlog,
    blogDetails,
    updateBlog,
    deleteBlog
}