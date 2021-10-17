const PersonalSkills = (props) => {
  return (
    <div className="bg-darkBlack">
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
