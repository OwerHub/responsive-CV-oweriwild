import cssPic from "../img/icons/css.png";
import sassPic from "../img/icons/sass.png";
import jsPic from "../img/icons/javascript.png";
import reactPic from "../img/icons/react.png";
import bootstrapPic from "../img/icons/bootstrap.png";
import tailwindPic from "../img/icons/tailwind.png";

import nodeJsPic from "../img/icons/nodeJs.png";
import mongoDbPic from "../img/icons/mongoDB.png";
import dockerPic from "../img/icons/docker.png";

const oneReference = (props) => {
  const checkElement = (element) => {
    console.log(props.data.icons.indexOf("Mongo"));
  };

  const iconArray = [
    cssPic,
    sassPic,
    jsPic,
    reactPic,
    bootstrapPic,
    tailwindPic,
    nodeJsPic,
    mongoDbPic,
    dockerPic,
  ];

  const iconNameArray = [
    "css",
    "sass",
    "js",
    "react",
    "bootstap",
    "tailwind",
    "node",
    "mongo",
    "docker",
  ];

  const checkIcon = (inputArray) => {
    for (const techniq of inputArray) {
      console.log(iconNameArray.indexOf(techniq));
    }
  };

  // checkIcon(props.data.icons);

  return (
    <div className="mb-6">
      <header className="flex justify-center text-lg">
        <span className="mr-2 ">{props.data.name}</span>
        <span>{props.data.version}</span>
      </header>

      <section className="flex">
        <div className="h-48 w-48 bg-white text-red-500">kép</div>
        <div className="flex flex-wrap w-1/2">
          {iconArray.map((data, iterator) => (
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
