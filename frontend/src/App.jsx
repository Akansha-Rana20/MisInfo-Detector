import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!text.trim()) {
      setError("Please enter some text to analyze.");
      return;
    }
    setLoading(true);
    setError("");
    setResult("");
    try {
      const res = await axios.post("http://localhost:5000/analyze", { text });
      setResult(res.data.result);
    } catch (err) {
      console.error(err);
      setError("Failed to analyze text. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Misinformation Detector</h1>
      
      <textarea
        className="w-full max-w-xl h-32 p-2 border rounded-md mb-4"
        placeholder="Enter text or news here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 mb-4"
        onClick={handleAnalyze}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
      {result && (
        <div className="mt-4 p-4 border rounded-md bg-white max-w-xl w-full">
          <h2 className="text-xl font-semibold mb-2">Analysis Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;
