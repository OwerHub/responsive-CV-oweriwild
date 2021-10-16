import React, { useState, useEffect, useContext } from "react";
import LanguageSelect from "./languageSelect";
import { TextContext } from "../context/TextContext";

function HeadDiv(props) {
  const [text, settext] = useContext(TextContext);
  /*   if (text.head) {
    console.log(text.head);
  } */
  return (
    <header className="bg-darkRed h-40">
      <div
        className="
					bg-darkBlack h-12 w-full px-3 text-white 
					flex justify-between items-center "
      >
        <div className="bg-purple-500 w-1/6 text-left">button</div>
        <div
          className="
						w-20 h-20 rounded-full bg-white
						transform translate-y-6
			"
        ></div>
        <LanguageSelect></LanguageSelect>
      </div>
      <div className="pt-12 text-center">
        <div>{text.head && text.head[1]}</div>
        <div>{text.head && text.head[2]}</div>
      </div>
    </header>
  );
}

export default HeadDiv;
