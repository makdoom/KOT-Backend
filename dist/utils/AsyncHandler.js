import { AppError } from "./AppError.js";
const AsyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => {
            next(new AppError(500, error.message, error));
        });
    };
};
export default AsyncHandler;
