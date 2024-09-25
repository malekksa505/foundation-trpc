require("dotenv").config();

import cors from "cors";
import express from "express";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8080, () => console.log(`Listening on port 8080`));
