function Splitter() {
  const Numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    <div className="flex  justify-center mt-1">
      <div className="flex  w-full justify-between opacity-20">
        {Numbers.map((data, iterator) => (
          <div
            key={`split${iterator}`}
            className={`h-3 w-1/12 bg-gray-${data} `}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Splitter;
