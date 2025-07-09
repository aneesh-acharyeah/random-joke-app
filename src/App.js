import React, { useState, useEffect } from "react";
import Joke from "./components/Joke";
import "./App.css";

const App = () => {
  const [joke, setJoke] = useState(null);

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <h1>😂 Random Joke Generator</h1>
      <Joke joke={joke} />
      <button onClick={fetchJoke}>Get Another Joke</button>
    </div>
  );
};

export default App;
