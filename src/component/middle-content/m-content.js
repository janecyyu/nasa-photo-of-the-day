import React, { useState, useEffect } from "react";
import axios from "axios";
import StoryCard from "./m-card";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import CustomizedRatings from "./rating";

const ContentBox = styled.div`
  display: flex;
`;

var currentDate = new Date();
var today = new Date();

function dateMaker(date) {
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();
  date = yyyy + "-" + mm + "-" + dd;
  return date;
}

const MiddleContent = () => {
  //console.log(dateMaker(next_date));
  //console.log("today" + today);
  const [date, setDate] = useState(dateMaker(currentDate));
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=2h7Qg2rbJK3WTXXDKIDySG0VQeaCHWLdtW9eLgb2`
      )
      .then(re => {
        //console.log(re.data);
        setInfo(re.data);
      })
      .catch(err => console.log("error", err));
  }, [date]);
  return (
    <div className="m">
      <div className="entry">
        <StoryCard
          date={info.date}
          explanation={info.explanation}
          copyright={info.copyright}
          hdurl={info.hdurl}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          currentDate.setDate(currentDate.getDate() - 1);
          setDate(dateMaker(currentDate));
        }}
      >
        previous
      </Button>{" "}
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          currentDate.setDate(today.getDate());
          setDate(dateMaker(today));
        }}
      >
        today
      </Button>{" "}
      <Button
        variant="contained"
        onClick={() => {
          currentDate.setDate(currentDate.getDate() + 1);
          setDate(dateMaker(currentDate));
        }}
      >
        next
      </Button>
      <CustomizedRatings/>
    </div>
  );
};
export default MiddleContent;
