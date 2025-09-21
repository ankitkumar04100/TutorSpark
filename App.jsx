import React from "react";
import QuestionGenerator from "./components/QuestionGenerator";
import Dashboard from "./components/Dashboard";
import StudentPreview from "./components/StudentPreview";
import ExportPDF from "./components/ExportPDF";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-center p-5 bg-blue-600 text-white">
        <h1 className="text-3xl font-bold">TutorSpark</h1>
      </header>
      <main className="p-5">
        <QuestionGenerator />
        <StudentPreview />
        <Dashboard />
        <ExportPDF />
      </main>
    </div>
  );
}

export default App;
