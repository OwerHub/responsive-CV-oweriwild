//import codeCoolPic from "../img/icons/codecool.png";
import codeCoolPic from "../../img/icons/codecool.png";
import { useEffect } from "react";

const Jobs = (props) => {
  const schoolPicArray = [codeCoolPic];
  const schools = ["CodeCool"];
  const schoolNumber = schools.indexOf(props.data.institution);
  return (
    <div className=" my-5 flex ">
      <div className="w-5 mr-2 mt-1">
        {/* <img
          src={schoolPicArray[schoolNumber]}
          alt="SchoolPic"
          className="w-5 mr-2 mt-1"
        /> */}
      </div>

      <div className="w-full pr-5">
        <div className="flex justify-between mb-3 ">
          <div className="  text-lg sm:text-xl mr-8 font-semibold">
            {props.data.subject}  
          </div>
          <div className="text-sm flex items-end ">{props.data.time}</div>
        </div>
        <ul className="list-disc ml-2">
            {props.data.tasks.map((task, iterator )=> (
                <li key={`task${iterator}`} className="mt-1">
                    {task}
                </li>

            ))}
          
         
        </ul>
      </div>
    </div>
  );
};

export default Jobs;
