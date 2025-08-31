import express from "express";
import {
  getProgress,
  saveProgress,
} from "../controllers/courseProgressController.js";

const router = express.Router();

router.post("/", saveProgress);

router.get("/", getProgress);

export default router;
