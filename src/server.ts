import express from "express";
import connectDB from "../config/db.config";
import indexRoutes from "../routes/index.routes";

const app = express();
const PORT = 3000;

app.use(express.json());

connectDB();

app.use("/", indexRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});