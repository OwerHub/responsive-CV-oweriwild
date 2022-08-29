import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import Schools from "./educationComp/schools";
import Jobs from "./experenceComp/jobs";
function Experience (props) {
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
          {text.experience && text.experience.title}
        </div>
      </div>

      <div>
        {text.experience &&
          text.experience.jobs.map((data, iterator) => (
            <div key={iterator} className=" mb-8">
              <Jobs data={data}></Jobs>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Experience;
