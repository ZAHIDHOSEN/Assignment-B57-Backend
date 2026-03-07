import { Request, Response } from "express"
import { ProjectServices } from "./project.services";



const createProject = async(req:Request,res:Response) =>{
    try {
        const project = req.body;
        const result = await ProjectServices.createProject(project)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
        
    }
}


const getAllProject = async(req:Request,res:Response)=>{
    try {
        const result = await ProjectServices.getAllProject()
        res.status(200).json(result)
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}



const ProjectDetails = async(req:Request,res:Response)=>{
    try {
        const id = (req.params.id)as string

        const result = await ProjectServices.ProjectDetails(id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

const updateProject = async(req:Request,res:Response) =>{
    try {
       const id = (req.params.id) as string
       const project = req.body
       const result = await ProjectServices.updateProject(id,project)
       res.status(200).json(result) 

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
        
    }
}


const deleteProject = async(req:Request,res:Response) =>{
    try {
        const id = (req.params.id) as string
        const result = await ProjectServices.deleteProject(id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}



export const ProjectController = {
    createProject,
    getAllProject,
    ProjectDetails,
    updateProject,
    deleteProject
}