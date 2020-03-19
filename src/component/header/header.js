import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const HeaderImageBox = styled.div`
  position: relative;
  width: 50%;
  height: 600px;
  display:flex;
  margin: 10% 25% 1% 25%;
  &:hover{
    opacity:0.9;
  }
`;
const HeaderImg = styled.img`
  max-width: 100%;
`;
const HeaderTextOne = styled.h1`
  position: absolute;
  bottom:53%;
  left:21%;
  color: white;
  font-size: 7rem;
  font-family: 'Liu Jian Mao Cao', cursive;
`;
const HeaderTextTwo = styled.h1`
  position: absolute;
  bottom:37%;
  left:37%;
  color: white;
  font-size: 7rem;
  font-family: 'Liu Jian Mao Cao', cursive;
`;

export default function Header() {
  const [bgc, setBgc] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?date=2020-03-18&api_key=2h7Qg2rbJK3WTXXDKIDySG0VQeaCHWLdtW9eLgb2"
      )
      .then(re => {
        console.log(re.data.hdurl);
        setBgc(re.data.hdurl);
      })
      .catch(err => console.log("error", err));
  }, []); //only one time

  return (
    <HeaderImageBox>
      <HeaderImg className="header-bgc" src={bgc} alt="dark sky" />
      <HeaderTextOne>Beautiful</HeaderTextOne>
      <HeaderTextTwo>Day</HeaderTextTwo>
    </HeaderImageBox>
  );
}
