import { users } from "../data/users.js";
import { teachers } from "../data/teachers.js";
import newId from "../utils/newId.js";
const createteacher = (userId, description, title) => {
  try {
    const user = users.find((u) => u.id === userId);

    if (!user) {
      return null;
    }

    user.role = "T";
    const id = newId(teachers);
    const newTeacher = {
      id,
      name: user.name,
      description,
      title,
      userId,
    };

    teachers.push(newTeacher);

    return newTeacher;
  } catch (error) {
    console.error(error);

    return null;
  }
};

export { createteacher };
