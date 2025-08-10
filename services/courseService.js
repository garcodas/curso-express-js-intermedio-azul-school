import newId from "../utils/newId.js";
import { courses } from "../data/course.js";
const addCourse = (name, description, teacherId) => {
  try {
    const id = newId(courses);
    const newCourse = { id, name, description, teacherId };
    courses.push(newCourse);

    return newCourse;
  } catch (error) {
    console.error("Error adding course:", error);
    return null;
  }
};

const getCourses = () => {
  try {
    return courses;
  } catch (error) {
    console.error("Error retrieving courses:", error);
    return null;
  }
};

const updateCourse = (id, newCourseName, newCourseDescription) => {
  try {
    const index = courses.findIndex((course) => course.id === id);
    if (index === -1) throw new Error("Course not found");
    courses[index].name = newCourseName ?? courses[index].name;
    courses[index].description =
      newCourseDescription ?? courses[index].description;
    return courses[index];
  } catch (error) {
    console.error("Error updating course:", error);
    return null;
  }
};

const deleteCourse = (id) => {
  try {
    const index = courses.findIndex((course) => course.id === id);
    if (index === -1) throw new Error("Course not found");
    courses.splice(index, 1);
    return true;
  } catch (error) {
    console.error("Error deleting course:", error);
    return false;
  }
};

const getByTeacherId = (teacherId) => {
  try {
    return courses.filter((course) => course.teacherId === teacherId);
  } catch (error) {
    console.error("Error retrieving courses by teacher ID:", error);
    return null;
  }
};

export { addCourse, getCourses, updateCourse, deleteCourse, getByTeacherId };
