import React, { useState, useEffect, createContext } from "react";

import "./App.css";
import HeadDiv from "./components/head";
import Body from "./components/body";
import { TextProvider } from "./context/TextContext";

function App() {
  const [isLang, setLang] = useState("hu");

  return (
    <TextProvider>
      <div className="App">
        <HeadDiv lang={isLang}></HeadDiv>
        <Body lang={isLang}></Body>
      </div>
    </TextProvider>
  );
}

export default App;
