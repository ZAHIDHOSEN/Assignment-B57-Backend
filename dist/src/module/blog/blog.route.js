import express from "express";
import { BlogController } from "./blog.controller.js";
import { authMiddleware } from "../../utilis/authMidddleware.js";
const router = express.Router();
router.post("/", authMiddleware, BlogController.createBlog);
router.get("/", BlogController.getAllBlog);
router.get("/:id", BlogController.blogDetails);
router.patch("/:id", BlogController.updateBlog);
router.delete("/:id", BlogController.deleteBlog);
export const BlogRoute = router;
//# sourceMappingURL=blog.route.js.map