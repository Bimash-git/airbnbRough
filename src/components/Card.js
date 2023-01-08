import React from "react";

function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        src={`../image/${props.item.coverImg}`}
        className="card--image"
        alt="Michael_Phelps"
      />
      <div className="card--stats">
        <img src="../image/star.png" alt="star" className="card--star" />
        <span className="gray">{props.item.stats.rating} </span>
        <span className="gray"> ({props.item.stats.reviewCount}) . </span>
        <span>{props.item.location}</span>
      </div>
      <p className="p">{props.item.title}</p>
      <p className="bold">
        <span>From ${props.item.price} </span>
      </p>
    </div>
  );
}

export default Card;
