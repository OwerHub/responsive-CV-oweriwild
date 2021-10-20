const Hobbies = (props) => {
  return (
    <div
      className="
          bg-lightCard dark:bg-darkBlack  md:bg-transparent md:dark:bg-transparent 
            pt-6 md:pt-12 "
    >
      <header
        className="
            font-exo2  text-2xl mb-1
            text-center md:text-left uppercase  md:normal-case
            tracking-widest md:tracking-normal md:font-semibold"
      >
        {props.data.title}:
      </header>
      <section
        className="
            font-exo2 font-light text-lg 
            pl-6  md:pl-0 tracking-wider md:tracking-normal"
      >
        {props.data.datas.map((data, iterator) => (
          <div className="py-1" key={`hb${iterator}`}>
            - {data}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Hobbies;
