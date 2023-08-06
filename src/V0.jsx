import { useId } from "react";
import { Link } from "react-router-dom";
import Card from "./Card.jsx";
import "./V0.css";

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

function V0() {
  const deckId = useId();

  return (
    <main data-theme="light" className="container v0">
      <div className="nav">
        <h1>Cards Deck</h1>
        <Link to="v1" tabIndex={-1}>
          v1
        </Link>
      </div>
      {cards.map((card, i) => (
        <Card key={`${deckId}-${i}`} title={card.title} color={card.color} />
      ))}
    </main>
  );
}

export default V0;
