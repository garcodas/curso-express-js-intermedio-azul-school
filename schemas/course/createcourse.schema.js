import joi from "joi";

const createCourseSchema = joi.object({
  name: joi.string().min(3).max(100).required(),
  description: joi.string().min(10).max(500).required(),
  teacherId: joi.number().required(),
});

export default createCourseSchema;
