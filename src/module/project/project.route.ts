import express from "express"
import { ProjectController } from "./project.controller.js"
import { authMiddleware } from "../../utilis/authMidddleware.js"


const router = express.Router()


router.post("/",authMiddleware,ProjectController.createProject)
router.get("/",ProjectController.getAllProject)
router.get("/:id",ProjectController.ProjectDetails)
router.patch("/:id",ProjectController.updateProject)
router.delete("/:id",ProjectController.deleteProject)


export const ProjectRoute = router