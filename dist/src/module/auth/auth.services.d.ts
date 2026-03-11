interface LoginPayload {
    email: string;
    password: string;
}
export declare const AuthServices: {
    loginAdmin: (payload: LoginPayload) => Promise<{
        user: {
            id: string;
            email: string;
            name: string;
            password: string;
            role: import("../../../generated/prisma/enums.js").Role;
            createdAt: Date;
            updatedAt: Date;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    getNewAccessToken: (refreshToken: string) => Promise<{
        accessToken: string;
    }>;
    logoutAdmin: () => Promise<{
        message: string;
    }>;
    getMe: (userId: string) => Promise<{
        id: string;
        email: string;
        name: string;
        password: string;
        role: import("../../../generated/prisma/enums.js").Role;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
};
export {};
//# sourceMappingURL=auth.services.d.ts.map