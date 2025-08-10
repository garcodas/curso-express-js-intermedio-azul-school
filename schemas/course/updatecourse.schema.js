import joi from "joi";

const updateCourseSchema = joi.object({
  id: joi.number().required(),
  name: joi.string().min(3).max(100).optional(),
  description: joi.string().min(10).max(500).optional(),
});

export default updateCourseSchema;
