import { prisma } from "../../../lib/prisma.js";
import bcrypt from "bcrypt";
import { createAccessToken, createRefreshToken, verifyRefreshToken } from "../../utilis/jwt.js";
const loginAdmin = async (payload) => {
    const { email, password } = payload;
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });
    if (!user) {
        throw new Error("user not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid password");
    }
    const jwtPayload = {
        id: user.id,
        email: user.email
    };
    const accessToken = createAccessToken(jwtPayload);
    const refreshToken = createRefreshToken(jwtPayload);
    return {
        user,
        accessToken,
        refreshToken
    };
};
const logoutAdmin = async () => {
    return {
        message: "User logged out successfully",
    };
};
const getNewAccessToken = async (refreshToken) => {
    const decoded = verifyRefreshToken(refreshToken);
    const user = await prisma.user.findUnique({
        where: { id: decoded.id }
    });
    if (!user) {
        throw new Error("User not found");
    }
    const accessToken = createAccessToken({
        id: user.id,
        email: user.email
    });
    return {
        accessToken
    };
};
const getMe = async (userId) => {
    const user = await prisma.user.findUnique({
        where: { id: userId }
    });
    return user;
};
export const AuthServices = {
    loginAdmin,
    getNewAccessToken,
    logoutAdmin,
    getMe
};
//# sourceMappingURL=auth.services.js.map