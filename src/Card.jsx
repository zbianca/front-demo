import { useState } from "react";
import "./Card.css";
import HeartOn from "./assets/heart-on.svg";
import HeartOff from "./assets/heart-off.svg";

// Arrow Heart by Sandro Charles Batista Junior
// from https://thenounproject.com/browse/icons/term/arrow-heart/
// Heart by ferle
// from https://thenounproject.com/browse/icons/term/heart/

function Card({ title, color }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <a href="#" tabIndex={-1} aria-label={title}>
        <div className="image" style={{ backgroundColor: color }} />
      </a>
      <div className="content">
        <div className="top">
          <a href="#">
            <h3 className="title">{title}</h3>
          </a>
          <button
            className="heartBtn"
            onClick={() => setLiked((prevState) => !prevState)}
          >
            <img
              className="heart"
              src={liked ? HeartOn : HeartOff}
              alt={liked ? "Liked" : `Like ${title}`}
            />
          </button>
        </div>
        <p className="price">$$/m</p>
        <small className="ref">Ref# XYZ01</small>
      </div>
    </div>
  );
}

export default Card;
