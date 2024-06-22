import { loginService } from "../services/authService.js";
import { AppError } from "../utils/AppError.js";
import { AppResponse } from "../utils/AppResponse.js";
import AsyncHandler from "../utils/AsyncHandler.js";
export const loginRoute = AsyncHandler(async (req, res, next) => {
    const { username, password, machinename } = req.body;
    if (!username)
        return res.json(new AppResponse(400, "Username not provided", null));
    if (!password)
        return res.json(new AppResponse(400, "Password not provided", null));
    const result = await loginService({
        username,
        userpassword: password,
        machinename,
    });
    if (result[0]?.message) {
        return next(new AppError(500, result[0].message, null));
    }
    res.json(new AppResponse(200, "Login successfull", result));
});
