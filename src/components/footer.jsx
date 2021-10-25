import { useContext, useState, useEffect } from "react";
import { TextContext } from "../context/TextContext";

import Hobbies from "./footerComps/hobbies";
import PersonalSkills from "./footerComps/personalSkills";
import Contacts from "./footerComps/contacts";

const Footer = () => {
  const [text, setText] = useContext(TextContext);

  return (
    <div
      className="
				text-black dark:text-white md:text-white
				md:bg-lightSide md:dark:bg-darkBlack 
					md:col-start-1 md:row-start-1 md:pt-32 
					md:border-r-2 md:dark:border-darkYellow md:border-darkBlack
          md:pl-4
		"
    >
      <div className=" bg-lightBg dark:bg-darkGray text-center py-4 cardHead md:hidden">
        {text.footer && text.footer.others[0]}
      </div>
      {text.footer && <Contacts data={text.footer.contacts}></Contacts>}
      {text.footer && <PersonalSkills data={text.footer.skills}></PersonalSkills>}
      {text.footer && <Hobbies data={text.footer.hobbies}></Hobbies>}
    </div>
  );
};

export default Footer;
