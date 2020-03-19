import React from "react";
import "./m-content.css";

const StoryCard = props => {
  return (
    <div className="middle">
        <div className="content-container">
            <h2>Author: {props.copyright}</h2>
            <h6>Date: {props.date}</h6>
            <p>{props.explanation}</p>
        </div>
        <div className="img-container">
            <img className="m-img" src={props.hdurl} alt="photo from nasa"/>
        </div>
    </div>
  );
};

export default StoryCard;
