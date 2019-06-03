import React from "react";
import "./PresCard.css";

export default function PresCard(props) {
  return (
    <div className="card">
      <h2>{props.presidentInfo.number}</h2>
      <h3>{props.presidentInfo.president}</h3>
      <h3>
        alive:{props.presidentInfo.birth_year} to{" "}
        {props.presidentInfo.death_year}
      </h3>
      <h4>
        president from:{props.presidentInfo.took_office} to{" "}
        {props.presidentInfo.left_office}
      </h4>
      <h3>{props.presidentInfo.party}</h3>
    </div>
  );
}
