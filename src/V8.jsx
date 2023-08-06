import { useId, useEffect } from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Card from "./Card.jsx";
import "./V6.css";

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

function V7() {
  const deckId = useId();
  const sideScroll = (direction) => {
    const container = document.querySelector(".simplebar-content-wrapper");
    const card = document.querySelector(".card");
    const deck = document.querySelector(".deck");
    let scrollAmount = 0;
    const CARD_WIDTH = parseInt(card.offsetWidth);
    const GAP_WIDTH = parseInt(getComputedStyle(deck).gap);
    const SCROLL_WIDTH = (CARD_WIDTH + GAP_WIDTH) * 1;

    const slideTimer = setInterval(() => {
      if (direction === "left") {
        container.scrollLeft -= SCROLL_WIDTH / 10;
      } else {
        container.scrollLeft += SCROLL_WIDTH / 10;
      }
      scrollAmount += 10;
      if (scrollAmount >= 100) {
        window.clearInterval(slideTimer);
      }
    }, 25);
  };

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
    trackHorizontal.classList.add("v6");
    thumbHorizontal.classList.add("v6");
  }, []);

  return (
    <main data-theme="light" className="container v6">
      <h1>Cards Deck</h1>
      <h2 id={deckId}>{category}</h2>
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

export default V7;
