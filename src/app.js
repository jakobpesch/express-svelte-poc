import express from "express";
import { handler } from "./client/build/handler.js";
const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  res.json({ hello: "world" });
});

app.use(handler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
