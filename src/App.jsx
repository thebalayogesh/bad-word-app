import React, { useState } from "react";
import TextChecker from "./components/TextChecker";
import ResultCard from "./components/ResultCard";
import AddWordForm from "./components/AddWordForm";
import Footer from "./components/Footer";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async (text) => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(
        "https://bad-word-app-demo.vercel.app/api/profanity/check",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        }
      );
      const data = await res.json();
      setResult(data);
    } catch (error) {
      setResult({ error: "Something went wrong!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          🛡️ Bad Word Grabber
        </h1>
        <TextChecker onCheck={handleCheck} />
        {loading && (
          <div className="flex justify-center mt-6">
            <div className="relative flex flex-col items-center">
              <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm text-gray-600 mt-2 animate-pulse">
                Scanning...
              </p>
            </div>
          </div>
        )}
        {result && <ResultCard result={result} />}
        {/* <AddWordForm /> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
