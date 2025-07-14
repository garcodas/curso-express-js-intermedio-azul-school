import joi from "joi";
const assignRoleSchema = joi.object({
  userId: joi.number().required(),
  description: joi.string().required(),
  title: joi.string().required(),
});

export default assignRoleSchema;
