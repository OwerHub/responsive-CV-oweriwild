import React, { useState, useEffect, useContext } from "react";
import Switch from "./switch";

import LanguageSelect from "./languageSelect";
import { TextContext } from "../context/TextContext";
import { divideWidth } from "tailwindcss/defaultTheme";

function HeadDiv(props) {
  const [text, settext] = useContext(TextContext);

  return (
    <header
      className="
        bg-lightHead dark:bg-darkRed h-80 md:h-40 md:pr-2
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
  
          text-left  cursor-pointer 
          flex justify-center items-center
          col-start-1 row-start-1 row-span-2 md:row-span-2 
          md:col-start-8 lg:col-start-10  xl:col-start-12
          
      "
        onClick={props.switch}
      >
        <Switch dark={props.dark} text={text.head && text.head[3]}></Switch>
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
            flex justify-center items-center
            col-start-3 row-start-1 row-span-2
            md:row-start-3 md:row-span-2 
            md:col-start-8 lg:col-start-10  xl:col-start-12"
      >
        <LanguageSelect></LanguageSelect>
      </div>
      <div
        className="
          
          flex flex-col justify-end xs:justify-center pb-3 sm:pb-1 md:pb-2
          text-center  
          col-start-1 col-span-3 row-start-5  row-span-2
          md:col-start-3 md:row-start-1  md:row-span-4
          md:col-span-5 lg:col-span-7 xl:col-span-9

          "
      >
        <div
          className="
          
          h-full 
           flex justify-center md:justify-start items-center xs:items-end
          font-archivoBlack 
          text-4xl xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl  
          text-center  md:text-left   uppercase"
        >
          <div className="">{text.head && text.head[1]}</div>
        </div>
        <div
          className="
          xs:mt-3
          text-jura font-light uppercase  md:text-xl lg:text-2xl  tracking-widest
         dark:text-white
          text-center  md:text-left"
        >
          {text.head && text.head[2]}
        </div>
      </div>
    </header>
  );
}

export default HeadDiv;
