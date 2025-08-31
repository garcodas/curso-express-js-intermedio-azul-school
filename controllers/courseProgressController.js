import saveProgressSchema from "../schemas/courseProgress/saveProgress.schema.js";
import * as courseProgressService from "../services/courseProgressService.js";
const saveProgress = (req, res) => {
  const { error } = saveProgressSchema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ errors: error.details.map((err) => err.message) });
  }
  const { classId, userId, courseId } = req.body;

  const result = courseProgressService.saveProgress(classId, userId, courseId);
  if (!result) {
    return res.status(500).json({ error: "Failed to save progress" });
  }
  return res.status(200).json(result);
};

const getProgress = (req, res) => {
  //   const result = courseProgressService.getProgress(userId, courseId);
  //   if (!result) {
  //     return res.status(404).json({ error: "Progress not found" });
  //   }
  //   return res.status(200).json(result);

  return res.status(501).json({ error: "Not implemented yet" });
};

export { saveProgress, getProgress };
