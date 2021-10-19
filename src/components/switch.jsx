function Switch(props) {
  return (
    <div
      className="
				flex justify-center items-center flex-col 
			"
    >
      <div>{props.text}</div>
      <div
        className={`
								bg-gray-300 h-4 w-7 rounded-full mt-2 
								flex ${props.dark ? "justify-end" : "justify-start"}`}
      >
        <div className="h-4 w-4 bg-gray-800 rounded-full"></div>
      </div>
    </div>
  );
}

export default Switch;
