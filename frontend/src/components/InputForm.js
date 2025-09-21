import React, { useState } from "react";
import { analyzeText } from "../services/api";

function InputForm({ setResult }) {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await analyzeText(text);
    setResult(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Enter text or news article..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Analyze</button>
    </form>
  );
}

export default InputForm;
