import loginSchema from "../schemas/auth/login.schema.js";
import registerSchema from "../schemas/auth/register.schema.js";
import * as AuthService from "../services/authService.js";
const login = (req, res) => {
  const { error } = loginSchema.validate(req.body || {});

  if (error) {
    return res
      .status(400)
      .json({ errors: error.details.map((err) => err.message) });
  }

  const { email, password } = req.body;

  const user = AuthService.login(email, password);

  if (!user) {
    return res
      .status(401)
      .json({ message: "No existe un usuario con estas credenciales." });
  }

  res.json({ message: "Login Successfully", user });
};

const register = (req, res) => {
  const { error } = registerSchema.validate(req.body || {});
  if (error) {
    return res
      .status(400)
      .json({ errors: error.details.map((err) => err.message) });
  }

  const { name, email, password } = req.body;

  const user = AuthService.register(email, password, name);

  if (!user) {
    return res.status(500).json({ error: "Algo salió mal, intente más tarde" });
  }

  return res.json({ message: "Register successfully", user });
};

export { login, register };
