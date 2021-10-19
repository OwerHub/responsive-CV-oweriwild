const Hobbies = (props) => {
  return (
    <div className="dark:bg-darkGray  bg-lightBg md:dark:bg-transparent md:bg-transparent ">
      <header>{props.data.title}</header>
      <section>
        {props.data.datas.map((data, iterator) => (
          <div key={`hb${iterator}`}>{data}</div>
        ))}
      </section>
    </div>
  );
};

export default Hobbies;
