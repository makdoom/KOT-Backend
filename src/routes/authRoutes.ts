import { loginRoute } from "@/controller/authController";
import { Router } from "express";

const authRouter = Router();

// Routes
authRouter.route("/login").post(loginRoute);

export default authRouter;
