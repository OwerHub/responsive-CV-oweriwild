const PersonalSkills = (props) => {
  return (
    <div className="bg-darkGray">
      <header>{props.data.title}</header>
      <section>
        <div>{props.data.phone}</div>
        <div>{props.data.mail}</div>
        <div>{props.data.github}</div>
      </section>
    </div>
  );
};

export default PersonalSkills;
