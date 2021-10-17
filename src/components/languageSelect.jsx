import { useState, useEffect, useContext } from "react";
import { TextContext } from "../context/TextContext";

import educationHu from "../languages/educationHu.json";
import educationEng from "../languages/educationEng.json";
import headHu from "../languages/headHu.json";
import headEng from "../languages/headEng.json";
import referenceHu from "../languages/referenceHu.json";
import referenceEng from "../languages/referenceEng.json";
import softwareSkillsHu from "../languages/softwareSkillsHu.json";
import softwareSkillsEng from "../languages/softwareSkillsEng.json";
import footerEng from "../languages/footerEng.json";
import footerHu from "../languages/footerHu.json";

const LanguageSelect = () => {
  const [isEng, setEng] = useState(false);
  const [text, setText] = useContext(TextContext);

  useEffect(() => {
    if (isEng) {
      setText({
        head: headEng,
        education: educationEng,
        references: referenceEng,
        softwareSkills: softwareSkillsEng,
        footer: footerEng,
      });
    } else {
      setText({
        head: headHu,
        education: educationHu,
        references: referenceHu,
        softwareSkills: softwareSkillsHu,
        footer: footerHu,
      });
    }
  }, [isEng]);

  const clickFunct = () => {
    setEng(!isEng);
  };

  return (
    <div className=" text-right" onClick={() => clickFunct()}>
      eng / hu
    </div>
  );
};

export default LanguageSelect;
