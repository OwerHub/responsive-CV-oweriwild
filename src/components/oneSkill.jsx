const OneSkill = (props) => {
  return (
    <div
      className="
		bg-white text-black w-28 h-28 rounded-full m-4 
			flex justify-center items-center flex-col
		"
    >
      <div>{props.data[1]}</div>
      <div>{props.data[0]}</div>
    </div>
  );
};

export default OneSkill;
