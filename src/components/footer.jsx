import { useContext, useState, useEffect } from "react";
import { TextContext } from "../context/TextContext";

import Hobbies from "./hobbies";
import PersonalSkills from "./personalSkills";
import Contacts from "./contacts";

const Footer = () => {
  const [text, setText] = useContext(TextContext);

  if (text.footer) {
    console.log(text.footer.hobbies);
  }

  return (
    <div
      className="
				text-black dark:text-white md:text-white
				md:bg-lightSide md:dark:bg-darkBlack 
					md:col-start-1 md:row-start-1 md:pt-32 
					md:border-r-2 md:dark:border-darkYellow md:border-darkBlack
		"
    >
      {text.footer && <Hobbies data={text.footer.hobbies}></Hobbies>}
      {text.footer && <PersonalSkills data={text.footer.skills}></PersonalSkills>}
      {text.footer && <Contacts data={text.footer.contacts}></Contacts>}
    </div>
  );
};

export default Footer;
