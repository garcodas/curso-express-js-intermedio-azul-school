import express from "express";
import authRouter from "./authRouter.js";

const mainRouter = express.Router();

// www.example.com/api/auth
// www.facebook.com/api/auth
mainRouter.use("/auth", authRouter);

export default mainRouter;
