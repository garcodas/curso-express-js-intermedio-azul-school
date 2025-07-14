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

export { login };
