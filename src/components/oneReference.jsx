import { existTechniqIcons } from "../service/iconsAndSkills";

const oneReference = (props) => {
  return (
    <div className="mb-6">
      <header className="flex justify-between text-lg mb-5">
        <div className="md:w-48 md:text-right">
          <span className="mr-2 text-2xl font-semibold">{props.data.name}</span>
        </div>

        {/*  <span className=" bg-purple-500  ">{props.data.version}</span> */}
        <div className="flex justify-end w-1/2 ">
          {existTechniqIcons(props.data.icons).map((data, iterator) => (
            <div className="mx-1 my-1" key={iterator}>
              <img src={data} alt={`logo${iterator}`} className="w-6 h-6" />
            </div>
          ))}
        </div>
      </header>

      <div></div>
      <section className=" flex">
        <div className=" mt-1 h-48 w-48 bg-white text-red-500   ">kép</div>
        <div
          className="
          px-4
          2xl:w-4/6 xl:w-4/6 lg:w-4/6 md:w-4/6 w-1/2
          "
        >
          {/*  {props.data.description} */}
        </div>
      </section>
      {/* <div>{props.data.description}</div> */}

      <article className="flex ">
        <div className="w-1/2 mt-6 pr-2">{props.data.description}</div>
        <div className="w-1/2 pl-2 ">
          <div>{props.data.features.title}</div>
          <ul className="ml-4 ">
            {props.data.features.datas.map((data, iterator) => (
              <li key={`ft${iterator}`} className="list-disc">
                {" "}
                {data}
              </li>
            ))}
          </ul>
        </div>
      </article>

      <article className="mt-16  ">
        <div>{props.data.technologies.title}</div>
        {props.data.technologies.technologieList.map((data, iterator) => (
          <div className="flex" key={iterator}>
            <div className="mr-3 ">{data.title}</div>
            <div className="flex flex-wrap">
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
