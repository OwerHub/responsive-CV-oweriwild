const Schools = (props) => {
  return (
    <div className="border-b-2 border-gray-800 my-5">
      <div className="flex">
        <div>{props.data[0]}</div>
        <div>{props.data[1]}</div>
      </div>
      <div className="flex">
        <div>{props.data[2]}</div>
        <div>{props.data[3]}</div>
      </div>
    </div>
  );
};

export default Schools;
