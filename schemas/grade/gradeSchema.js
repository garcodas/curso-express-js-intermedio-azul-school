import joi from "joi";

const gradeSchema = joi.object({
  courseId: joi.number().required(),
  userId: joi.number().required(),
  grade: joi.number().min(0).max(100).required(),
});

export default gradeSchema;
