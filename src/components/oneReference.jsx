const oneReference = (props) => {
  //console.log(props.data[5][1]);
  return (
    <div className="mb-6">
      <div className="flex justify-center text-lg">
        <div className="mr-2 ">{props.data[0]}</div>
        <div>{props.data[1]}</div>
      </div>

      <div className="flex">
        <div className="h-48 w-48 bg-white text-red-500">kép</div>
        <div className="flex flex-wrap w-1/2">
          {props.data[3].map((data, iterator) => (
            <div className="mx-4 my-4" key={iterator}>
              {data}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4"> {props.data[4]}</div>

      <div className="mt-3">
        <div>{props.data[5][0]}</div>
        {props.data[5][1].map((data, iterator) => (
          <div className="flex" key={iterator}>
            <div className="mr-3 w-1/6">{data[0]}</div>
            <div>
              {data[1].map((data2, iterator) => (
                <span key={iterator} className="ml-2">
                  {data2}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default oneReference;
