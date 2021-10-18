const PersonalSkills = (props) => {
  return (
    <div className="bg-lightCard dark:bg-darkBlack  md:bg-transparent">
      <header>{props.data.title}</header>
      <section>
        {props.data.datas.map((data, iterator) => (
          <div key={`psb${iterator}`}>{data}</div>
        ))}
      </section>
    </div>
  );
};

export default PersonalSkills;
