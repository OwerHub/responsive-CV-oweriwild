import { existTechniqIcons } from "../service/iconsAndSkills";

const oneReference = (props) => {
  return (
    <div className="mb-6">
      <header className="flex justify-between text-lg mb-5">
        <div className="md:w-48 md:text-right">
          <span className="mr-2 ">{props.data.name}</span>
          <span>{props.data.version}</span>
        </div>
        <div className="flex justify-end w-1/2 ">
          {existTechniqIcons(props.data.icons).map((data, iterator) => (
            <div className="mx-1 my-1" key={iterator}>
              <img src={data} alt={`logo${iterator}`} className="w-5 h-5" />
            </div>
          ))}
        </div>
      </header>

      <section className="flex">
        <div className="h-48 w-48 bg-white text-red-500">kép</div>
      </section>

      <div className="mt-4"> {props.data.description}</div>

      <article className="mt-3">
        <div>{props.data.technologies.title}</div>
        {props.data.technologies.technologieList.map((data, iterator) => (
          <div className="flex" key={iterator}>
            <div className="mr-3 w-1/6">{data.title}</div>
            <div>
              {data.techs.map((data2, iterator) => (
                <span key={iterator} className="ml-2">
                  {data2}
                </span>
              ))}
            </div>
          </div>
        ))}
      </article>
    </div>
  );
};

export default oneReference;
