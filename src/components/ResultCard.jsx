// src/components/ResultCard.jsx
const ResultCard = ({ result }) => {
  if (result.error) {
    return <p className="text-red-600 text-center mt-4">{result.error}</p>;
  }

  return (
    <div className="mt-6 max-w-xl mx-auto bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Result</h2>
      {result.containsProfanity ? (
        <>
          <p className="text-red-600 font-medium mb-2">
            ⚠️ Profanity detected!
          </p>
          <ul className="list-disc list-inside text-red-700">
            {result.profanityWords.map((word, idx) => (
              <li key={idx}>{word}</li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-green-600 font-medium">✅ No profanity detected.</p>
      )}
    </div>
  );
};

export default ResultCard;
