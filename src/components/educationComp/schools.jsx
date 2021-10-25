//import codeCoolPic from "../img/icons/codecool.png";
import codeCoolPic from "../../img/icons/codecool.png";
import { useEffect } from "react";

const Schools = (props) => {
  const schoolPicArray = [codeCoolPic];
  const schools = ["CodeCool"];
  const schoolNumber = schools.indexOf(props.data.institution);
  return (
    <div className=" my-5 flex ">
      <div>
        <img
          src={schoolPicArray[schoolNumber]}
          alt="SchoolPic"
          className="w-5 mr-2 mt-1"
        />
      </div>

      <div className="w-full pr-5">
        <div className="flex justify-between mb-1 ">
          <div className="uppercase  text-lg sm:text-xl mr-8">
            {props.data.subject}
          </div>
          <div className="text-sm flex items-end">{props.data.city}</div>
        </div>
        <div className="flex justify-between ">
          <div className="">{props.data.institution}</div>
          <div className="text-sm">{props.data.year}</div>
        </div>
      </div>
    </div>
  );
};

export default Schools;
