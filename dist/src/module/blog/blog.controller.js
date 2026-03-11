import { BlogServices } from "./blog.servics.js";
const createBlog = async (req, res) => {
    try {
        const payload = req.body;
        const userId = req.user?.id;
        const result = await BlogServices.createBlog(payload, userId);
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
const getAllBlog = async (req, res) => {
    try {
        const result = await BlogServices.getAllBlog();
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
const blogDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await BlogServices.blogDetails(id);
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
const updateBlog = async (req, res) => {
    try {
        const id = (req.params.id);
        const blog = req.body;
        const result = await BlogServices.updateBlog(id, blog);
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
const deleteBlog = async (req, res) => {
    try {
        const id = (req.params.id);
        const result = await BlogServices.deleteBlog(id);
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
export const BlogController = {
    createBlog,
    getAllBlog,
    blogDetails,
    updateBlog,
    deleteBlog
};
//# sourceMappingURL=blog.controller.js.map