import React from "react";

const StoryCard = props => {
  return (
    <div className="content-container">
      <h2>Author: {props.copyright}</h2>
      <h6>Date: {props.date}</h6>
      <p>{props.explanation}</p>
    </div>
  );
};

export default StoryCard;
