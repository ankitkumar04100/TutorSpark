import React, { useState } from "react";
import axios from "axios";

const QuestionGenerator = () => {
  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState([]);

  const generateQuestions = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/generate-questions`, { topic });
      setQuestions(res.data.questions);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mb-5 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-2">AI Question Generator</h2>
      <input
        type="text"
        placeholder="Enter topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={generateQuestions} className="bg-blue-600 text-white p-2 rounded">Generate</button>
      <ul className="mt-3">
        {questions.map((q, i) => (
          <li key={i} className="p-2 border-b">{q}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionGenerator;
