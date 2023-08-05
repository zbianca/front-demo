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
  const sideScroll = (direction) => {
    const container = document.querySelector(".simplebar-content-wrapper");
    const card = document.querySelector(".card");
    const deck = document.querySelector(".deck");
    let scrollAmount = 0;
    const GAP_WIDTH = parseInt(getComputedStyle(deck).gap);
    const SCROLL_WIDTH = (card.offsetWidth + GAP_WIDTH) * 1;

    const slideTimer = setInterval(() => {
      if (direction === "left") {
        container.scrollLeft -= parseInt(SCROLL_WIDTH, 10) / 10;
      } else {
        container.scrollLeft += parseInt(SCROLL_WIDTH, 10) / 10;
      }
      scrollAmount += 10;
      if (scrollAmount >= 100) {
        window.clearInterval(slideTimer);
      }
    }, 25);
  };

  return (
    <main data-theme="light" className="container">
      <h1>Cards Deck</h1>
      <h2 id={deckId}>Our Silks</h2>
      <div className="scroll-wrapper">
        <SimpleBar forceVisible="x" autoHide={false}>
          <ul className="deck" aria-labelledby={deckId}>
            {cards.map((card, i) => (
              <li key={`${deckId}-${i}`}>
                <Card title={card.title} color={card.color} />
              </li>
            ))}
          </ul>
        </SimpleBar>
        <div className="buttons">
          <button className="button-left" onClick={() => sideScroll("left")}>
            ←
          </button>
          <button className="button-right" onClick={() => sideScroll("right")}>
            →
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
