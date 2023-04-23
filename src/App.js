import React, { useState } from "react";
import "./styles.css";


function App() {
  const [quote, setQuote] = useState("");

  const generateQuote = async () => {
    const response = await fetch("https://api.kanye.rest");
    const data = await response.json();
    setQuote(data.quote);
  };

  return (
    <div className="App">
      <div className="glass-effect">
        <h1>Kanye Quote Generator!</h1>
        <p>{quote}</p>
        <button onClick={() => generateQuote(quote)} className="refresh">
          Generate Quote!
        </button>
      </div>
    </div>
  );
}
export default App;
