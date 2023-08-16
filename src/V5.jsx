import { useId, useEffect } from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Card from "./Card.jsx";
import "./V5.css";

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

function V5() {
  const deckId = useId();

  useEffect(() => {
    const simplebarWrapper = document.querySelector(
      ".simplebar-content-wrapper"
    );
    simplebarWrapper.setAttribute("aria-label", category);

    // lame CSS scoping
    const trackHorizontal = document.querySelector(
      ".simplebar-track.simplebar-horizontal"
    );
    const thumbHorizontal = document.querySelector(
      ".simplebar-scrollbar.simplebar-visible"
    );
    trackHorizontal.classList.add("v5");
    thumbHorizontal.classList.add("v5");
  }, []);

  return (
    <main data-theme="light" className="container v5">
      <div className="nav">
        <h1>Cards Deck</h1>
        <Link to="../v6" relative="path" tabIndex={-1}>
          v6
        </Link>
      </div>
      <h2 id={deckId}>{category}</h2>
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

export default V5;
