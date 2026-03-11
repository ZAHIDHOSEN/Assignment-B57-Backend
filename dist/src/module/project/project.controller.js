import { ProjectServices } from "./project.services.js";
const createProject = async (req, res) => {
    try {
        const project = req.body;
        console.log(project);
        const userId = req.user?.id;
        const result = await ProjectServices.createProject(project, userId);
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
const getAllProject = async (req, res) => {
    try {
        const result = await ProjectServices.getAllProject();
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
const ProjectDetails = async (req, res) => {
    try {
        const id = (req.params.id);
        const result = await ProjectServices.ProjectDetails(id);
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
const updateProject = async (req, res) => {
    try {
        const id = (req.params.id);
        const project = req.body;
        const result = await ProjectServices.updateProject(id, project);
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
const deleteProject = async (req, res) => {
    try {
        const id = (req.params.id);
        const result = await ProjectServices.deleteProject(id);
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
export const ProjectController = {
    createProject,
    getAllProject,
    ProjectDetails,
    updateProject,
    deleteProject
};
//# sourceMappingURL=project.controller.js.map