import { useState, useEffect, useContext } from "react";
import { TextContext } from "../context/TextContext";

import educationHu from "../languages/educationHu.json";
import educationEng from "../languages/educationEng.json";
import headHu from "../languages/headHu.json";
import headEng from "../languages/headEng.json";
import referenceHu from "../languages/referenceHu.json";
import referenceEng from "../languages/referenceEng.json";

const LanguageSelect = () => {
  const [isEng, setEng] = useState(false);
  const [text, setText] = useContext(TextContext);

  useEffect(() => {
    if (isEng) {
      setText({
        head: headEng,
        education: educationEng,
        references: referenceEng,
      });
    } else {
      setText({
        head: headHu,
        education: educationHu,
        references: referenceHu,
      });
    }
  }, [isEng]);

  const clickFunct = () => {
    setEng(!isEng);
  };

  return (
    <div className="bg-purple-500 w-1/6 text-right" onClick={() => clickFunct()}>
      eng / hu
    </div>
  );
};

export default LanguageSelect;
