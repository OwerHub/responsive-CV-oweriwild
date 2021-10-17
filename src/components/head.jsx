import React, { useState, useEffect, useContext } from "react";
import LanguageSelect from "./languageSelect";
import { TextContext } from "../context/TextContext";

function HeadDiv(props) {
  const [text, settext] = useContext(TextContext);
  /*   if (text.head) {
    console.log(text.head);
  } */
  return (
    <header
      className="
        bg-lightHead dark:bg-darkRed h-80
          grid  grid-rows-6 grid-flow-col md:grid-cols-3  "
    >
      <div
        className="
          bg-darkBlack
          col-start-1 col-span-3 row-start-1 row-span-2 "
      ></div>

      <div
        className="
          text-white text-center
          col-start-1 row-start-1"
      >
        dark mode
      </div>
      <div
        className="
          bg-purple-800 text-left 
          col-start-1 row-start-2 
      "
      >
        button
      </div>
      <div
        className="
            flex justify-center items-center 
            col-start-2 row-start-1 row-span-4"
      >
        <div
          className="
						w-44 h-44  rounded-full bg-white  
            col-start-2 row-start-1"
        ></div>
      </div>

      <div
        className="
            col-start-3 row-start-1 row-span-2 bg-pink-400"
      >
        <LanguageSelect></LanguageSelect>
      </div>
      <div
        className="
          text-center bg-pink-800
          col-start-1 col-span-3 row-start-5  row-span-2 "
      >
        <div>{text.head && text.head[1]}</div>
        <div>{text.head && text.head[2]}</div>
      </div>
    </header>
  );
}

export default HeadDiv;
