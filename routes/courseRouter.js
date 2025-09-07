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
router.delete("/:courseId", deleteCourse);

// www.example.com/api/course/
// www.facebook.com/api/course/
router.get("/", getCourses);

// www.example.com/api/course/by-teacher/654321
// www.facebook.com/api/course/by-teacher/654321
router.get("/by-teacher/:teacherId", getCoursesByTeacherId);

export default router;
