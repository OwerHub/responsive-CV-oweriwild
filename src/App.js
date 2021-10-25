import React, { useState, useEffect, createContext } from "react";

import "./App.css";
import HeadDiv from "./components/head";
import Body from "./components/body";
import Footer from "./components/footer";
import { TextProvider } from "./context/TextContext";

function App() {
  const [isDark, setDark] = useState(true);

  return (
    <TextProvider>
      <div className={`App  ${isDark && "dark"}`}>
        <HeadDiv switch={() => setDark(!isDark)} dark={isDark}></HeadDiv>
        <section
          className="
        grid grid-cols-1 
        md:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6
        md:dark:bg-darkBlack md:bg-lightBg dark:text-white text-black
        "
        >
          <Body></Body>
          <Footer> </Footer>
        </section>
      </div>
    </TextProvider>
  );
}

export default App;
