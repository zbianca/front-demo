import { useId } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
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
      <SimpleBar forceVisible="x" autoHide={false}>
        <ul className="deck" aria-labelledby={deckId}>
          {cards.map((card, i) => (
            <li key={`${deckId}-${i}`}>
              <Card title={card.title} color={card.color} />
            </li>
          ))}
        </ul>
      </SimpleBar>
    </main>
  );
}

export default App;
