import React from "react";

export const Card = (prop, favorite) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={prop.img} class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{prop.title}</h5>
        <p className="card-text">{prop.description}</p>
        <div className="card-footer d-flex justify-content-between">
          <a href={prop.url} className="btn btn-primary">
            Learn more!
          </a>
          {favorite}?
          <button type="button" className="btn">
            like
          </button>
          :
          <button type="button" className="btn">
            dislike
          </button>
        </div>
      </div>
    </div>
  );
};
