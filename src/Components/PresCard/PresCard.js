import React from "react";
import "./PresCard.css";

export default function PresCard(props) {
  let {
    number,
    president,
    birth_year,
    death_year,
    took_office,
    left_office,
    party
  } = props.presidentInfo;
  if (death_year === null) {
    death_year = "now";
  }
  if (left_office === null) {
    left_office = "now";
  }
  return (
    <div className="card">
      <h2>{number}</h2>
      <h3>{president}</h3>
      <h3>
        alive:{birth_year} to {death_year}
      </h3>
      <h4>
        president from:{took_office} to {left_office}
      </h4>
      <h3>{party}</h3>
    </div>
  );
}
