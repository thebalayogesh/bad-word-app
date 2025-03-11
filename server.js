import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import profanityRoutes from "./src/routes/profanityRoutes.js";
import wordRoutes from "./src/routes/wordRoutes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use("/api/profanity", profanityRoutes);
app.use("/api/words", wordRoutes);

app.get("/", (req, res) => {
    res.send("Server is Running!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}).on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.log(`Port ${PORT} is in use. Trying a with another port...`);
        app.listen(0, () => {
            console.log(`Server running on a new port`);
        });
    } else {
        console.error(err);
    }
});

export default app;
