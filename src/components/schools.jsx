import codeCoolPic from "../img/icons/codecool.png";

const Schools = (props) => {
  return (
    <div className=" my-5 flex ">
      <div>
        <img src={codeCoolPic} alt="SchoolPic" className="w-5 mr-2 mt-1" />
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
