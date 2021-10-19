import { useEffect } from "react";
import Pie from "./pie";
import { returnIcon } from "../service/iconsAndSkills";

const OneSkill = (props) => {
  const [icon, name, color2, color1] = returnIcon(props.data[0]);

  return (
    <div className="transform scale-75 md:scale-100 ">
      <div
        className=" ;
      bg-white bg-opacity-90 text-black w-28 h-28 rounded-full m-4 
			flex justify-center items-center flex-col relative
      
      "
      >
        <div className="absolute">
          <Pie
            count={props.count}
            percentage={props.data[1]}
            color1={color1}
            color2={color2}
          />
        </div>
        {/* <div className="absolute">százalék</div> */}
        <img src={icon} alt={props.data[0]} width="50px" />
        {/*  <div>{props.data[1]}</div>
      <div>{props.data[0]}</div> */}
      </div>
      <div className="text-center">{name}</div>
    </div>
  );
};

export default OneSkill;
