import { useId } from "react";
import { Link } from "react-router-dom";
import Card from "./Card.jsx";
import "./V2.css";

const category = "Our Medium Roast";
const cards = [
  { title: "American Roast", color: "#C79161" },
  { title: "City+ Roast", color: "#9A7B4F" },
  { title: "Breakfast Roast", color: "#9F5F43" },
  { title: "Regular Roast", color: "#964C27" },
  { title: "Medium City Roast", color: "#753D28" },
  { title: "Full City Roast", color: "#4A231A" },
  { title: "Vienna Roast", color: "#5A382C" },
  { title: "Continental Roast", color: "#5F4643" },
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
