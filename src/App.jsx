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
  return (
    <main data-theme="light" className="container">
      <h1>Cards Deck</h1>
      <div className="deck">
        {cards.map((card) => (
          <Card title={card.title} color={card.color} />
        ))}
      </div>
    </main>
  );
}

export default App;
