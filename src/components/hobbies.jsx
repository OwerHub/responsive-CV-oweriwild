const Hobbies = (props) => {
  if (props.data) {
    console.log(props.data);
  }
  return (
    <div className="bg-darkGray">
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
