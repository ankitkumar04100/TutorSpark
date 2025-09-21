import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const openaiGenerate = async (topic) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a teacher assistant AI." },
      { role: "user", content: `Generate 5 questions on ${topic} with hints.` }
    ],
    max_tokens: 300,
  });

  return response.choices[0].message.content.split("\n").filter(Boolean);
};
