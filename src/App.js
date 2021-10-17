import React, { useState, useEffect, createContext } from "react";

import "./App.css";
import HeadDiv from "./components/head";
import Body from "./components/body";
import Footer from "./components/footer";
import { TextProvider } from "./context/TextContext";

function App() {
  //const [isLang, setLang] = useState("hu");

  return (
    <TextProvider>
      <div className="App ">
        <HeadDiv></HeadDiv>
        <div
          className="
        grid grid-cols-1 
        md:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6
        
        "
        >
          <Body></Body>
          <Footer> </Footer>
        </div>
      </div>
    </TextProvider>
  );
}

export default App;
