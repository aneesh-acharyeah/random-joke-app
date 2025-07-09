import React from "react";
import "./Joke.css";

const Joke = ({ joke }) => {
  if (!joke) return <p>Loading...</p>;

  return (
    <div className="joke">
      <h3>{joke.setup}</h3>
      <p>{joke.punchline}</p>
    </div>
  );
};

export default Joke;
