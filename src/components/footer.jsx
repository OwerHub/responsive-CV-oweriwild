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
    <div className="bg-darkBlack text-white">
      {text.footer && <Hobbies data={text.footer.hobbies}></Hobbies>}
      {text.footer && <PersonalSkills data={text.footer.skills}></PersonalSkills>}
      {text.footer && <Contacts data={text.footer.contacts}></Contacts>}
    </div>
  );
};

export default Footer;
