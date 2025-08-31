import joi from "joi";

const saveProgressSchema = joi.object({
  classId: joi.number().required(),
  userId: joi.number().required(),
  courseId: joi.number().required(),
});

export default saveProgressSchema;
