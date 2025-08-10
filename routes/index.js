import express from "express";
import authRouter from "./authRouter.js";
import userRouter from "./user.router.js";
import courseRouter from "./courseRouter.js";

const mainRouter = express.Router();

// www.example.com/api/auth
// www.facebook.com/api/auth
mainRouter.use("/auth", authRouter);

// www.example.com/api/user
// www.facebook.com/api/user
mainRouter.use("/user", userRouter);

mainRouter.use("/course", courseRouter);

export default mainRouter;
