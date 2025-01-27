import express from "express";
import database from "./db.js";
const app = express();
database();
app.listen(8000, () => {
  console.log("Backend Connected");
});
