import { prisma } from "../../../lib/prisma.js";
const createProject = async (project, userId) => {
    const result = await prisma.project.create({
        data: {
            title: project.title,
            slug: project.slug,
            description: project.description,
            liveUrl: project.liveUrl,
            repoUrl: project.repoUrl,
            thumbnail: project.thumbnail,
            features: project.features || [],
            authorId: userId
        },
        include: {
            author: true
        }
    });
    return result;
};
const getAllProject = async () => {
    const result = await prisma.project.findMany({
        include: {
            author: true
        }
    });
    return result;
};
const ProjectDetails = async (id) => {
    const result = await prisma.project.findUnique({
        where: {
            id
        },
        include: {
            author: true
        }
    });
    return result;
};
const updateProject = async (id, project) => {
    const result = await prisma.project.update({
        where: {
            id
        },
        data: project
    });
    return result;
};
const deleteProject = async (id) => {
    const result = await prisma.project.delete({
        where: {
            id
        }
    });
    return result;
};
export const ProjectServices = {
    createProject,
    getAllProject,
    ProjectDetails,
    updateProject,
    deleteProject
};
//# sourceMappingURL=project.services.js.map