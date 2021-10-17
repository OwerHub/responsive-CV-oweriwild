const Schools = (props) => {
  return (
    <div className="border-b-2 border-gray-800 my-5">
      <div className="flex">
        <div>{props.data.subject}</div>
        <div>{props.data.institution}</div>
      </div>
      <div className="flex">
        <div>{props.data.city}</div>
        <div>{props.data.year}</div>
      </div>
    </div>
  );
};

export default Schools;
