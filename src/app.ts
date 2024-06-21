import globalErrorHandler from "@/middlewares/globalErrorHandler";
import morganMiddleware from "@/middlewares/morganMiddleware";
import authRouter from "@/routes/authRoutes";
import cors from "cors";
import express from "express";

const app = express();

// Middlewares
app.use(morganMiddleware);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.get("/", (req, res) => res.send("✅ Server is running!"));
app.use("/api/v1/auth", authRouter);

// Error Handler
app.use("*", globalErrorHandler);

export default app;
