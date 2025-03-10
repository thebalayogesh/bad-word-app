import supabase from "../config/db.js";

export const addWord = async (req, res) => {
    const { word } = req.body;
    if (!word) return res.status(400).json({ error: "Word is required." });

    const { data, error } = await supabase.from("bad_words").insert([{ word }]);
    if (error) return res.status(500).json({ error: error });

    res.json({ message: "Word added successfully", data });
};

export const removeWord = async (req, res) => {
    const { word } = req.body;
    if (!word) return res.status(400).json({ error: "Word is required." });

    const { error } = await supabase.from("bad_words").delete().eq("word", word);
    if (error) return res.status(500).json({ error: error });

    res.json({ message: "Word removed successfully" });
};
