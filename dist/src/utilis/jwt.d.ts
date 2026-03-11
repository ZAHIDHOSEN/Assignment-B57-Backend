import jwt from "jsonwebtoken";
export declare const createAccessToken: (payload: object) => string;
export declare const createRefreshToken: (payload: object) => string;
export declare const verifyRefreshToken: (token: string) => string | jwt.JwtPayload;
//# sourceMappingURL=jwt.d.ts.map