import express from "express";

const cors = require("cors");
const app = express();
const port = 80;

app.use(cors());
app.use(express.json());
app.use(express.text());

app.get("/", () => {
  console.log("hellow world");
});

app.listen(port, () => {
  console.log(`${port} port open`);
});
