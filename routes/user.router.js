import express from "express";
import { asignRole } from "../controllers/userController.js";
const router = express.Router();

router.use("/assign-role", asignRole);

export default router;
