import gradeSchema from "../schemas/grade/gradeSchema.js";
import * as GradeService from "../services/gradeService.js";
const createGrade = (req, res) => {
  const { error } = gradeSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { courseId, userId, grade } = req.body;
  const newGrade = GradeService.saveGrade(courseId, userId, grade);
  if (!newGrade) {
    res.status(500).json({ error: "Failed to create grade" });
  }
  res.status(201).json(newGrade);
};

export { createGrade };
