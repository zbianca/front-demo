import { useId } from "react";
import { Link } from "react-router-dom";
import Card from "./Card.jsx";
import "./V3.css";

const category = "Our Silks";
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

function V3() {
  const deckId = useId();

  return (
    <main data-theme="light" className="container v3">
      <div className="nav">
        <h1>Cards Deck</h1>
        <Link to="../v4" relative="path" tabIndex={-1}>
          v4
        </Link>
      </div>
      <h2 id={deckId}>{category}</h2>
      <ul className="deck" tabIndex="0" aria-labelledby={deckId}>
        {cards.map((card, i) => (
          <li key={`${deckId}-${i}`}>
            <Card title={card.title} color={card.color} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default V3;
