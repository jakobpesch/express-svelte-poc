import express from "express";
import { handler } from "../client/build/handler.js";
import auth from "./routes/auth.js";
const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  res.json({ hello: "world", this: "comes from the express serve /api route" });
});

app.use("/auth", auth);

if (process.env.CLIENT === "true") {
  app.use(handler);
} else if (process.env.NODE_ENV === "development") {
  app.get("/", (req, res) => {
    res.send("The client is not being served.");
  });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
