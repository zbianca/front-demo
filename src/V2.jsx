import { useId } from "react";
import { Link } from "react-router-dom";
import Card from "./Card.jsx";
import "./V2.css";

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

function V2() {
  const deckId = useId();

  return (
    <main data-theme="light" className="container v2">
      <div className="nav">
        <h1>Cards Deck</h1>
        <Link to="../v3" relative="path" tabIndex={-1}>
          v3
        </Link>
      </div>
      <h2>{category}</h2>
      <div className="deck" tabIndex="0">
        {cards.map((card, i) => (
          <Card key={`${deckId}-${i}`} title={card.title} color={card.color} />
        ))}
      </div>
    </main>
  );
}

export default V2;
