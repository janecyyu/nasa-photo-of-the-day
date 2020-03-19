import React from "react";
import styled from "styled-components";


const Article = styled.div`
  height: 90%;
  width: 90%;
  position: absolute;
  color: Maroon;
  padding: 5%;
  background-color: #fff;
  opacity: 0.7;
`;

const ContentBox = styled.div`
  position: relative;
  width: 50%;
  height: 600px;
  display: flex;
  margin: 1% 25% 1% 25%;
  align-items: center;
  justify-content: center;
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
`;

const StoryCard = props => {
  return (
    <ContentBox>
      <Article>
        <h2>Author: {props.copyright}</h2>
        <h6>Date: {props.date}</h6>
        <p>{props.explanation}</p>
      </Article>
      <Picture className="m-img" src={props.hdurl} alt="photo from nasa" />
      
    </ContentBox>
  );
};

export default StoryCard;
