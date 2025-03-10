import express from "express";
import { addWord, removeWord } from "../controllers/wordController.js";

const router = express.Router();
router.post("/add", addWord);
router.post("/remove", removeWord);

export default router;
