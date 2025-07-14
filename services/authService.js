import newId from "../utils/newId.js";

const users = [
  {
    id: 1,
    name: "Emanuel",
    email: "emanuel@example.com",
    password: "123$",
  },
];

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
    };

    users.push(newUser);

    return newUser;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { login, register };
