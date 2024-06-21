import Logger from "../logger/index.js";
import morgan from "morgan";
const stream = {
    write: (message) => Logger.http(message),
};
const skip = () => {
    const env = process.env.NODE_ENV || "development";
    return env !== "development";
};
const morganMiddleware = morgan(":method :url :status :response-time ms", {
    stream,
    skip,
});
export default morganMiddleware;
