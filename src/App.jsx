import { useState } from "react";
import "./App.css";
import Card from "./Card.jsx";

function App() {
  return (
    <main data-theme="light" className="container">
      <h1>Cards Deck</h1>
      <Card title="Turquoise Silk" color="turquoise" />
    </main>
  );
}

export default App;
