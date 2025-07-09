// src/components/TextChecker.jsx
import { useState } from "react";

const TextChecker = ({ onCheck }) => {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onCheck(text);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto mt-6 transition-all duration-300"
    >
      <div
        className={`transition-all duration-500 transform bg-white border rounded-xl shadow-xl p-6 ${
          isFocused ? "scale-[1.02] ring-2 ring-blue-500/40" : ""
        }`}
      >
        <label
          htmlFor="text"
          className="block text-xl font-semibold mb-3 text-gray-700"
        >
          🧠 Enter Text to Scan
        </label>

        <textarea
          id="text"
          className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg resize-none min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          placeholder="Paste something suspicious..."
          value={text}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="text-right mt-2 text-sm text-gray-500">
          {text.trim().length} characters
        </div>

        <button
          type="submit"
          className="mt-5 w-full py-3 px-6 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          🔍 Scan for Profanity
        </button>
      </div>
    </form>
  );
};

export default TextChecker;
