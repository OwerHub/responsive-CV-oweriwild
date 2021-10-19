import { useEffect } from "react";
import "../styles/try.css";
import Pie from "./pie";
const OneSkill = (props) => {
  // percen

  return (
    <div>
      <div
        className="
      bg-white text-black w-28 h-28 rounded-full m-4 
			flex justify-center items-center flex-col relative
      "
      >
        <div className="absolute ">
          <Pie className="" percentage={props.data[1]} colour="blue" />
        </div>
        <div className="absolute">százalék</div>
        {/*  <div>{props.data[1]}</div>
      <div>{props.data[0]}</div> */}
      </div>
      <div className="text-center">{props.data[0]}</div>
    </div>
  );
};

export default OneSkill;
