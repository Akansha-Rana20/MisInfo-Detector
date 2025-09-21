import express from "express";
import axios from "axios";

const router = express.Router();

// POST /analyze
router.post("/", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Text is required" });

    // Make request to OpenRouter / Gemini API
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions", // Correct endpoint
      {
        model: "deepseek/deepseek-chat-v3.1:free",
        messages: [
          { role: "system", content: "Detect misinformation in text" },
          { role: "user", content: text }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    // Log full response for debugging
    console.log("OpenRouter API response:", response.data);

    // Safety check: make sure choices exist
    if (!response.data?.choices || response.data.choices.length === 0) {
      return res.status(500).json({ error: "No response from OpenRouter API" });
    }

    const result = response.data.choices[0].message?.content || "No content returned";
    res.json({ result });

  } catch (err) {
    // Log full error details
    console.error("Error calling OpenRouter API:", err.response?.data || err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
