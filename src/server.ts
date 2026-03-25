import express from "express";
import connectDB from "../config/db.config";

const app = express();
const PORT = 3000;

app.use(express.json());

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});