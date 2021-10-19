import { existTechniqIcons } from "../service/iconsAndSkills";

const oneReference = (props) => {
  return (
    <div className="mb-6">
      <header className="flex justify-center text-lg">
        <span className="mr-2 ">{props.data.name}</span>
        <span>{props.data.version}</span>
      </header>

      <section className="flex">
        <div className="h-48 w-48 bg-white text-red-500">kép</div>
        <div className="flex flex-wrap w-1/2">
          {existTechniqIcons(props.data.icons).map((data, iterator) => (
            <div className="mx-4 my-4" key={iterator}>
              <img src={data} alt={`logo${iterator}`} className="w-10 h-10" />
            </div>
          ))}
        </div>
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
