import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const BottomImgBox = styled.div`
  position: relative;
  width: 50%;
  height: 600px;
  display:flex;
  margin: 1% 25% 1% 25%;
  &:hover{
    opacity:0.9;
  }
`;
const BottomImg = styled.img`
  max-width: 100%;
`;
const BottomTextOne = styled.h1`
  position: absolute;
  bottom:9%;
  right:5%;
  color: GhostWhite;
  font-size: 7rem;
  font-family: 'Liu Jian Mao Cao', cursive;
`;


export default function BottomContent() {
  const [bgc, setBgc] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?date=2020-01-15&api_key=2h7Qg2rbJK3WTXXDKIDySG0VQeaCHWLdtW9eLgb2"
      )
      .then(re => {
        console.log(re.data.hdurl);
        setBgc(re.data.hdurl);
      })
      .catch(err => console.log("error", err));
  }, []); //only one time

  return (
    <BottomImgBox>
      <BottomImg className="header-bgc" src={bgc} alt="dark sky" />
      <BottomTextOne>Have A<br/>Good Day</BottomTextOne>
    </BottomImgBox>
  );
}
