import React, { useEffect, useState } from "react";
import axios from "axios";
import "./header.css" 

export default function Header() {
  const [bgc, setBgc] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?date=2020-03-16&api_key=2h7Qg2rbJK3WTXXDKIDySG0VQeaCHWLdtW9eLgb2")
      .then(re => {
        console.log(re.data.hdurl);
        setBgc(re.data.hdurl);
      })
      .catch(err => console.log("error", err));
  }, []); //only one time

  return (
    <div className="header-img">
      <img className="header-bgc" src={bgc} alt="dark sky"/>
    </div>
  );
}
