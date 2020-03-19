import React from "react";
import "./App.css";
import Navigation from "./component/nav/navigation";
import Header from "./component/header/header";
import MiddleContent from "./component/middle-content/m-content";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <MiddleContent />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
