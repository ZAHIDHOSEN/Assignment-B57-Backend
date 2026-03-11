interface ICreateBlog {
    title: string;
    slug: string;
    content: string;
    thumbnail: string;
    authorId: string;
}
interface IUpdateBlog {
    title?: string;
    slug?: string;
    thumbnail?: string;
    content?: string;
}
export declare const BlogServices: {
    createBlog: (payload: ICreateBlog, userId: string) => Promise<{
        author: {
            id: string;
            email: string;
            name: string;
            password: string;
            role: import("../../../generated/prisma/enums.js").Role;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        content: string;
        thumbnail: string | null;
        authorId: string;
    }>;
    getAllBlog: () => Promise<({
        author: {
            id: string;
            email: string;
            name: string;
            password: string;
            role: import("../../../generated/prisma/enums.js").Role;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        content: string;
        thumbnail: string | null;
        authorId: string;
    })[]>;
    blogDetails: (id: string) => Promise<({
        author: {
            id: string;
            email: string;
            name: string;
            password: string;
            role: import("../../../generated/prisma/enums.js").Role;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        content: string;
        thumbnail: string | null;
        authorId: string;
    }) | null>;
    updateBlog: (id: string, blog: IUpdateBlog) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        content: string;
        thumbnail: string | null;
        authorId: string;
    }>;
    deleteBlog: (id: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        content: string;
        thumbnail: string | null;
        authorId: string;
    }>;
};
export {};
//# sourceMappingURL=blog.servics.d.ts.map