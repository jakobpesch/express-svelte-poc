import { Router } from "express";
const router = Router();

router.use((req, res, next) => {
  console.log("Time middleware in auth: ", Date.now());
  next();
});

router.get("/login", (req, res) => {
  res.json({ message: "Authentication successful" });
});

export default router;
