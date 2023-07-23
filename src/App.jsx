import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <main data-theme={theme} className="container">
      <div className="header">
        <h1>Cards Deck</h1>
        <select
          id="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          aria-label="Theme"
        >
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select>
      </div>
      {/* TODO: Add components */}
    </main>
  );
}

export default App;
