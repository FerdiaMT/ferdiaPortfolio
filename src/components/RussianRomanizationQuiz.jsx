import React, { useState } from "react";

const russianToRomanization = {
  "А": "a",  "Б": "b",  "В": "v",  "Г": "g",  "Д": "d",
  "Е": "e",  "Ё": "yo", "Ж": "zh", "З": "z",  "И": "i",
  "Й": "y",  "К": "k",  "Л": "l",  "М": "m",  "Н": "n",
  "О": "o",  "П": "p",  "Р": "r",  "С": "s",  "Т": "t",
  "У": "u",  "Ф": "f",  "Х": "kh","Ц": "ts", "Ч": "ch",
  "Ш": "sh", "Щ": "shch", "Ъ": "\"", "Ы": "y", "Ь": "'",
  "Э": "e",  "Ю": "yu", "Я": "ya"
};

const characters = Object.keys(russianToRomanization);

function getRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

export default function RussianRomanizationQuiz() {
  const [currentChar, setCurrentChar] = useState(getRandomCharacter());
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const correctAnswer = russianToRomanization[currentChar];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().toLowerCase() === correctAnswer) {
      setError("");
      setInput("");
      setCurrentChar(getRandomCharacter()); 
    } else {
      setError(`${currentChar} = ${correctAnswer}`);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.character}>{currentChar}</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter romanization"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Submit</button>
        </form>
        {error && <div style={styles.error}>{error}</div>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#rgba(0,0,0,0.1)",
  },
  card: {
    backgroundColor: "#rgba(0,0,0,0.1)",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "300px",
  },
  character: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "16px",
    marginBottom: "0.5rem",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "8px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    marginTop: "1rem",
    color: "red",
    fontWeight: "bold",
  },
};
