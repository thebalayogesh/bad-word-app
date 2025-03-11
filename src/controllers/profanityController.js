import supabase from "../config/db.js";
import { generateRegex } from "../utils/regexGenerator.js";

export const checkProfanity = async (req, res) => {
    try {
        const { text } = req.body;

        if (!text || typeof text !== "string") {
            return res.status(400).json({ error: "Valid text is required." });
        }

        const { data: words, error } = await supabase.from("bad_words").select("word");

        if (error) {
            console.error("Database error:", error);
            return res.status(500).json({ error: "Database error." });
        }

        if (!words || words.length === 0) {
            return res.json({ containsProfanity: false, profanityWords: [] });
        }

        let profanityWords = [];

        words.forEach(({ word }) => {
            const regex = generateRegex(word);
            if (regex.test(text)) {
                profanityWords.push(word);
            }
        });

        return res.json({
            containsProfanity: profanityWords.length > 0,
            profanityWords
        });

    } catch (err) {
        console.error("Unexpected error:", err);
        return res.status(500).json({ error: "Internal server error." });
    }
};
