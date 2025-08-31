import { grades } from "../data/grades.js";
import newId from "../utils/newId.js";

const saveGrade = (courseId, userId, grade) => {
  try {
    const id = newId(grades);
    const newGrade = {
      id,
      courseId,
      userId,
      grade,
    };
    grades.push(newGrade);

    console.log(grades);

    return newGrade;
  } catch (error) {
    console.error("Error saving grade" + error);

    return null;
  }
};

export { saveGrade };
