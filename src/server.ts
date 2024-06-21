import app from "@/app";
import Logger from "@/logger";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;
app.listen(port, async () => {
  console.log("testing");
  Logger.info(`🚀 Server up and running at http://localhost:${port}`);
});
