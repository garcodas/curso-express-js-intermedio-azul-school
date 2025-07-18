import { users } from "../data/users.js";
import newId from "../utils/newId.js";

const login = (email, password) => {
  const user = users.find((u) => u.email === email && u.password === password);

  return user || null;
};

const register = (email, password, name) => {
  try {
    const id = newId(users);

    const newUser = {
      id,
      name,
      email,
      password,
      role: "S",
    };

    users.push(newUser);

    return newUser;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const resetPassword = (email, password) => {
  try {
    const user = users.find((u) => u.email === email);

    if (!user) {
      return null;
    }

    user.password = password;

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { login, register, resetPassword };
