import { openaiGenerate } from "../utils/openai.js";

export const generateQuestions = async (req, res) => {
  const { topic } = req.body;
  try {
    const questions = await openaiGenerate(topic);
    res.json({ questions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate questions" });
  }
};
