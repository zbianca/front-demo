import { useId } from "react";
import "./App.css";
import Card from "./Card.jsx";

const cards = [
  { title: "Turquoise Silk", color: "turquoise" },
  { title: "Teal Silk", color: "teal" },
  { title: "Forest Green Silk", color: "forestgreen" },
  { title: "Sea Green Silk", color: "seagreen" },
  { title: "Coral Silk", color: "coral" },
  { title: "Salmon Silk", color: "salmon" },
  { title: "Crimson Silk", color: "crimson" },
  { title: "Firebrick Silk", color: "firebrick" },
];

function App() {
  const deckId = useId();

  return (
    <main data-theme="light" className="container">
      <h1>Cards Deck</h1>
      <h2 id={deckId}>Our Silks</h2>
      <ul className="deck" tabIndex={0} aria-labelledby={deckId}>
        {cards.map((card) => (
          <li>
            <Card title={card.title} color={card.color} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
