import assignRoleSchema from "../schemas/user/asignrole.schema.js";
import * as UserService from "../services/userService.js";
const asignRole = (req, res) => {
  const { error } = assignRoleSchema.validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ errors: error.details.map((err) => err.message) });
  }

  const { userId, description, title } = req.body;

  const teacher = UserService.createteacher(userId, description, title);

  if (!teacher) {
    return res
      .status(401)
      .json({ message: "Algo salió mal, intente más tarde" });
  }

  res.json({ message: "Teacher crated", teacher });
};

export { asignRole };
