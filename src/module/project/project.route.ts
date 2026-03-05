import express from "express"
import { ProjectController } from "./project.controller"


const router = express.Router()


router.post("/create-project",ProjectController.createProject)
router.patch("/:id",ProjectController.updateProject)
router.delete("/:id",ProjectController.deleteProject)


export const ProjectRoute = router