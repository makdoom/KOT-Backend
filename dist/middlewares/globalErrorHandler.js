/* eslint-disable */
import { AppError } from "../utils/AppError.js";
const globalErrorHandler = (error, req, res, next) => {
    if (error instanceof AppError) {
        return res.json({
            message: error.message,
            statusCode: error.statusCode,
            stack: error.stack,
        });
    }
};
export default globalErrorHandler;
