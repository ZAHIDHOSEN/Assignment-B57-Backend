import { prisma } from "../../../lib/prisma.js";
const createBlog = async (payload, userId) => {
    const result = await prisma.blog.create({
        data: {
            title: payload.title,
            slug: payload.slug,
            content: payload.content,
            thumbnail: payload.thumbnail,
            authorId: userId
        },
        include: {
            author: true,
        }
    });
    return result;
};
const getAllBlog = async () => {
    const result = await prisma.blog.findMany({
        include: {
            author: true
        }
    });
    return result;
};
const blogDetails = async (id) => {
    const result = await prisma.blog.findUnique({
        where: { id },
        include: {
            author: true
        }
    });
    return result;
};
const updateBlog = async (id, blog) => {
    const result = await prisma.blog.update({
        where: {
            id
        },
        data: blog
    });
    return result;
};
const deleteBlog = async (id) => {
    const blog = await prisma.blog.findUnique({
        where: { id }
    });
    if (!blog) {
        throw new Error("Blog not found");
    }
    const result = await prisma.blog.delete({
        where: {
            id
        }
    });
    return result;
};
export const BlogServices = {
    createBlog,
    getAllBlog,
    blogDetails,
    updateBlog,
    deleteBlog
};
//# sourceMappingURL=blog.servics.js.map