import { AuthServices } from "./auth.services.js";
const loginAdmin = async (req, res) => {
    try {
        const payload = req.body;
        const result = await AuthServices.loginAdmin(payload);
        res.cookie("accessToken", result.accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        });
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
const logoutAdmin = async (req, res) => {
    try {
        await AuthServices.logoutAdmin();
        res.clearCookie("accessToken", {
            httpOnly: true,
            secure: true, //true in production
            sameSite: "none",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
const getMe = async (req, res) => {
    try {
        const userId = req.user?.id;
        const result = await AuthServices.getMe(userId);
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
const refreshToken = async (req, res) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            throw new Error("Refresh token required");
        }
        const result = await AuthServices.getNewAccessToken(token);
        res.status(200).json({
            success: true,
            data: result
        });
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: error.message
        });
    }
};
export const AuthController = {
    loginAdmin,
    logoutAdmin,
    refreshToken,
    getMe
};
//# sourceMappingURL=auth.controller.js.map