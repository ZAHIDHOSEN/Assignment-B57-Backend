export interface ICreateProject {
    title: string;
    slug: string;
    description: string;
    liveUrl?: string;
    repoUrl?: string;
    thumbnail?: string;
    features?: string[];
    authorId: string;
}
export interface IUpdateProject {
    title?: string;
    slug?: string;
    description?: string;
    liveUrl?: string;
    repoUrl?: string;
    thumbnail?: string;
    features?: string[];
}
export declare const ProjectServices: {
    createProject: (project: ICreateProject, userId: string) => Promise<{
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
        thumbnail: string | null;
        authorId: string;
        description: string;
        liveUrl: string | null;
        repoUrl: string | null;
        features: string[];
    }>;
    getAllProject: () => Promise<({
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
        thumbnail: string | null;
        authorId: string;
        description: string;
        liveUrl: string | null;
        repoUrl: string | null;
        features: string[];
    })[]>;
    ProjectDetails: (id: string) => Promise<({
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
        thumbnail: string | null;
        authorId: string;
        description: string;
        liveUrl: string | null;
        repoUrl: string | null;
        features: string[];
    }) | null>;
    updateProject: (id: string, project: IUpdateProject) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        thumbnail: string | null;
        authorId: string;
        description: string;
        liveUrl: string | null;
        repoUrl: string | null;
        features: string[];
    }>;
    deleteProject: (id: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        thumbnail: string | null;
        authorId: string;
        description: string;
        liveUrl: string | null;
        repoUrl: string | null;
        features: string[];
    }>;
};
//# sourceMappingURL=project.services.d.ts.map