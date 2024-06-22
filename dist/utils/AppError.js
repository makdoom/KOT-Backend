export class AppError extends Error {
    statusCode;
    message;
    error;
    constructor(statusCode, message, error) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.statusCode = statusCode;
        this.message = message;
        this.error = error;
        Error.captureStackTrace(this);
    }
}
