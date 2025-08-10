import createCourseSchema from "../schemas/course/createcourse.schema.js";
import updateCourseSchema from "../schemas/course/updatecourse.schema.js";
import * as CourseService from "../services/courseService.js";
const createCourse = (req, res) => {
  const { error } = createCourseSchema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ errors: error.details.map((err) => err.message) });
  }

  const { name, description, teacherId } = req.body;
  const newCourse = CourseService.addCourse(name, description, teacherId);
  if (!newCourse) {
    return res.status(500).json({ error: "Failed to create course" });
  }
  return res.status(201).json(newCourse);
};

const updateCourse = (req, res) => {
  const { error } = updateCourseSchema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ errors: error.details.map((err) => err.message) });
  }

  const { id, name, description } = req.body;
  const updatedCourse = CourseService.updateCourse(id, name, description);
  if (!updatedCourse) {
    return res.status(500).json({ error: "Failed to update course" });
  }
  return res.status(200).json(updatedCourse);
};

const deleteCourse = (req, res) => {
  // const deletedCourse = await deleteCourse(id);
  // if (!deletedCourse) {
  //     return res.status(500).json({ error: "Failed to delete course" });
  // }
  // return res.status(200).json({ course: deletedCourse });

  return res
    .status(501)
    .json({ error: "Delete course functionality not implemented yet" });
};

const getCourses = (req, res) => {
  const courses = CourseService.getCourses();
  if (!courses) {
    return res.status(500).json({ error: "Failed to retrieve courses" });
  }
  return res.status(200).json(courses);
};

const getCoursesByTeacherId = (req, res) => {
  // const courses = CourseService.getByTeacherId(teacherId);
  // if (!courses) {
  //     return res.status(500).json({ error: "Failed to retrieve courses" });
  // }
  // return res.status(200).json({ courses });

  return res.status(501).json({
    error: "Get courses by teacher ID functionality not implemented yet",
  });
};

export {
  createCourse,
  updateCourse,
  deleteCourse,
  getCourses,
  getCoursesByTeacherId,
};
