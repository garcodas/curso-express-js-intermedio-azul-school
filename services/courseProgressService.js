import { courseProgress } from "../data/courseProgress.js";
const saveProgress = (classId, userId, courseId) => {
  try {
    const index = courseProgress.findIndex(
      (item) => item.courseId === courseId && item.userId === userId
    );

    if (index === -1) {
      courseProgress.push({ classId, userId, courseId });
    } else {
      courseProgress[index].classId = classId;
    }

    console.log(courseProgress);

    return true;
  } catch (error) {
    console.error("Error saving progress:", error);
    return false;
  }
};

const getProgress = (userId, courseId) => {
  try {
    return courseProgress.find(
      (item) => item.userId === userId && item.courseId === courseId
    );
  } catch (error) {
    console.error("Error retrieving progress:", error);
    return null;
  }
};

export { saveProgress, getProgress };
