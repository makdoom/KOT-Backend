import app from "./app.js";
import Logger from "./logger/index.js";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;
app.listen(port, async () => {
    Logger.info(`🚀 Server up and running at http://localhost:${port}`);
});
