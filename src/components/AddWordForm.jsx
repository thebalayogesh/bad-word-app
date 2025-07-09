// src/components/AddWordForm.jsx
import { useState } from "react";

const AddWordForm = () => {
  const [word, setWord] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAddWord = async (e) => {
    e.preventDefault();
    if (!word.trim()) return;

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(
        "https://bad-word-app-demo.vercel.app/api/words/add",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ word: word.trim() }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: data.message || "Added!" });
        setWord("");
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleAddWord}
      className="w-full max-w-xl mx-auto mt-8 bg-white border rounded-xl shadow p-6"
    >
      <h2 className="text-xl font-bold mb-4">➕ Add New Word to Block List</h2>

      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter word to add"
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className={`mt-4 w-full py-2 px-4 rounded bg-green-600 text-white font-medium hover:bg-green-700 transition ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Adding..." : "Add Word"}
      </button>

      {status && (
        <p
          className={`mt-3 text-center font-medium ${
            status.type === "success" ? "text-green-600" : "text-red-600"
          } animate-fade-in`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
};

export default AddWordForm;
