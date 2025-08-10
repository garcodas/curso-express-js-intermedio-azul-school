import express from "express";
import {
  createCourse,
  deleteCourse,
  getCoursesByTeacherId,
  updateCourse,
  getCourses,
} from "../controllers/courseController.js";

const router = express.Router();

// www.example.com/api/course/
// www.facebook.com/api/course/
router.post("/", createCourse);

// www.example.com/api/course/
// www.facebook.com/api/course/
router.patch("/", updateCourse);

// www.example.com/api/course/
// www.facebook.com/api/course/
router.delete("/", deleteCourse);

// www.example.com/api/course/
// www.facebook.com/api/course/
router.get("/", getCourses);

// www.example.com/api/course/teacher/
// www.facebook.com/api/course/teacher/
router.get("/by-teacher/", getCoursesByTeacherId);

export default router;
