import * as AuthService from "../services/authService.js";
const login = (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ message: "Email y contraseña requeridos" });
  }

  const user = AuthService.login(email, password);

  if (!user) {
    return res
      .status(401)
      .json({ message: "No existe un usuario con estas credenciales." });
  }

  res.json({ message: "Login Successfully", user });
};

const register = (req, res) => {
  res.json({ message: "Register successfully from Controller" });
};

export { login, register };
