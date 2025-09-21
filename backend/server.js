import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRouter from "./routes/analyze.js";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/analyze", analyzeRouter);

app.get("/", (req, res) => {
  res.send("AI Misinformation Detector Backend is running!");
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
