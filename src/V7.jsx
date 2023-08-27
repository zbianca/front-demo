import { useId, useEffect } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Card from "./Card.jsx";
import "./V6.css";

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
