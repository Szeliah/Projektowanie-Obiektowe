import express from "express";
import cors from "cors";
import { prisma } from "./lib/prisma";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Serwer działa!!!"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});