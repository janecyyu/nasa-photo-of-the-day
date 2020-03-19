import React, { useState, useEffect } from "react";
import "./m-content.css";
import axios from "axios";
import StoryCard from "./m-card";

var today = new Date();

var prev_date = new Date();
prev_date.setDate(prev_date.getDate() - 1);

var next_date = new Date();
next_date.setDate(prev_date.getDate() + 1);

function dateMaker(date) {
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();
  date = yyyy + "-" + mm + "-" + dd;
  today = date;
  return date;
}

const MiddleContent = () => {
  //console.log(dateMaker(next_date));
  //console.log("today" + today);
  const [date, setDate] = useState(dateMaker(today));
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
    return () => console.log("The Effect Hook has been cleaned up.");
  }, [date]);
  return (
    <div className="middle">
      <button onClick={() => setDate(dateMaker(prev_date))}>previous</button>
      <button onClick={() => setDate(dateMaker(today))}>today</button>
      <button onClick={() => setDate(dateMaker(next_date))}>next</button>
      <div className="entry">
        <StoryCard
          date={info.date}
          explanation={info.explanation}
          copyright={info.copyright}
        />
      </div>
    </div>
  );
};
export default MiddleContent;
