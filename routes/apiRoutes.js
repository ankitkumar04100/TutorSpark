import express from "express";
import { generateQuestions } from "../controllers/questionController.js";

const router = express.Router();

router.post("/generate-questions", generateQuestions);

export default router;
