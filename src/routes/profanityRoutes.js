import express from "express";
import { checkProfanity } from "../controllers/profanityController.js";

const router = express.Router();
router.post("/check", checkProfanity);

export default router;
