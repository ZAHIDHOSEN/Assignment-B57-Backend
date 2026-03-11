import { Request, Response } from "express";
export declare const AuthController: {
    loginAdmin: (req: Request, res: Response) => Promise<void>;
    logoutAdmin: (req: Request, res: Response) => Promise<void>;
    refreshToken: (req: Request, res: Response) => Promise<void>;
    getMe: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=auth.controller.d.ts.map