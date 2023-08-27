import "./Card.css";

function CardNoInteraction({ title, color }) {
  return (
    <div className="card">
      <a href="#" tabIndex={-1} aria-label={title}>
        <div className="image" style={{ backgroundColor: color }} />
      </a>
      <div className="content">
        <div className="top">
          <h3 className="title">{title}</h3>
        </div>
        <p className="price">$$/g</p>
        <small className="ref">Ref# XYZ01</small>
      </div>
    </div>
  );
}

export default CardNoInteraction;
