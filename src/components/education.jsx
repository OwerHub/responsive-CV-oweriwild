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
    <div
      className="
          bg-lightCard dark:bg-darkBlack 
          md:dark:bg-darkGray
            md:mt-4 md:ml-4 md:rounded-sm 
           px-4 py-4"
    >
      <div className=" w-full   flex justify-center">
        <div
          className=" text-center  py-4
           
         cardHead

        "
        >
          {text.education && text.education.title}
        </div>
      </div>

      <div>
        {text.education &&
          text.education.schools.map((data, iterator) => (
            <div key={iterator} className=" mb-8">
              <Schools data={data}></Schools>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Education;
