import supabase from "../config/db.js";
import { generateRegex } from "../utils/regexGenerator.js";

export const checkProfanity = async (req, res) => {
    try {
        const { text } = req.body;

        if (!text || typeof text !== "string") {
            return res.status(400).json({ error: "Valid text is required." });
        }

        // Fetch bad words from Supabase
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



// import supabase from "../config/db.js";
// import { generateRegex } from "../utils/regexGenerator.js";

// export const checkProfanity = async (req, res) => {
//     try {
//         const { text } = req.body;

//         if (!text || typeof text !== "string") {
//             return res.status(400).json({ error: "Valid text is required." });
//         }

//         // Fetch bad words from Supabase
//         const { data: words, error } = await supabase.from("bad_words").select("word");

//         if (error) {
//             console.error("Database error:", error);
//             return res.status(500).json({ error: "Database error." });
//         }

//         if (!words || words.length === 0) {
//             return res.json({ containsProfanity: false, message: "No bad words in database." });
//         }

//         // Check if text contains any profane words
//         const hasProfanity = words.some(({ word }) => generateRegex(word).test(text));

//         return res.json({ containsProfanity: hasProfanity, profanityWord: });
//     } catch (err) {
//         console.error("Unexpected error:", err);
//         return res.status(500).json({ error: "Internal server error." });
//     }
// };
