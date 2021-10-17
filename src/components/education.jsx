import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import Schools from "./schools";

function Education(props) {
  const [text, settext] = useContext(TextContext);
  /*   if (text.education) {
    console.log(text.education[0]);
  } */
  //const theme = useContext(ThemeContext);
  return (
    <div className="bg-darkBlack text-white px-4 py-4">
      <div className="uppercase text-center text-xl py-4 ">
        {text.education && text.education.title}
      </div>
      <div>
        {text.education &&
          text.education.schools.map((data, iterator) => (
            <Schools data={data} key={iterator}></Schools>
          ))}
      </div>
    </div>
  );
}

export default Education;
