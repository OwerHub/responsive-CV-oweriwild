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
        bg-lightHead dark:bg-darkRed h-80 md:h-40
          grid  grid-rows-6 grid-flow-col md:grid-cols-8 md:grid-rows-4
          lg:grid-cols-10 xl:grid-cols-12"
    >
      <div
        className="
          
          bg-darkBlack md:hidden
          col-start-1 col-span-3 row-start-1 row-span-2 "
      ></div>

      <div
        className="
          text-left  text-white cursor-pointer
          col-start-1 row-start-1 row-span-1 md:row-span-2
          md:col-start-8 lg:col-start-10  xl:col-start-12
      "
        onClick={props.switch}
      >
        dark
      </div>
      <div
        className="
            flex justify-center items-center  md:items-baseline 
            col-start-2 row-start-1 row-span-4
            md:col-start-1 md:col-span-2 md:row-start-3 md:row-span-2"
      >
        <div
          className="
						w-44 h-44  rounded-full bg-white   z-10
            col-start-2 row-start-1"
        ></div>
      </div>

      <div
        className="
          
            col-start-3 row-start-1 row-span-2
            md:row-start-3 md:row-span-2 
            md:col-start-8 lg:col-start-10  xl:col-start-12"
      >
        <LanguageSelect></LanguageSelect>
      </div>
      <div
        className="
          text-center  
          col-start-1 col-span-3 row-start-5  row-span-2
          md:col-start-3 md:row-start-1  md:row-span-4
          md:col-span-5 lg:col-span-7 xl:col-span-9

          "
      >
        <div>{text.head && text.head[1]}</div>
        <div>{text.head && text.head[2]}</div>
      </div>
    </header>
  );
}

export default HeadDiv;
