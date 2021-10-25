import { useState, useEffect } from "react";
import { existTechniqIcons } from "../../service/iconsAndSkills";

import { referencePictures } from "../../service/referenceService";

import arrowIcon from "../../img/icons/arrow-green.png";

//import "../styles/try.css";

const OneReference = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [isLocalText, setLocalText] = useState([
    "details",
    "close",
    "Description :",
  ]);

  console.log(referencePictures(1));

  useEffect(() => {
    if (props.data.features.title === "Funckiók") {
      setLocalText(["részletek", "bezár", "Leírás :"]);
    } else {
      setLocalText(["details", "close", "Description :"]);
    }
  }, [props.data.features.title]);

  return (
    <div
      className="
                mb-6 mt-10  py-5 md:py-10 px-5 rounded
              dark:bg-white bg-black dark:bg-opacity-5   transition-colors
                dark:hover:bg-opacity-10  hover:bg-opacity-10 bg-opacity-5

      "
    >
      <header
        className="
            flex  text-lg mb-5 md:mb-12 
            flex-col  md:justify-between md:flex-row text-center"
      >
        <div className="md:w-48 md:text-right md:min-w-max ">
          <span className="mr-2  text-3xl md:text-2xl font-semibold">
            {props.data.name}
          </span>
        </div>

        <div className="  "> Version: {props.data.version}</div>
      </header>

      <div className="  outer  relative transition easy-in-out  ">
        <section
          className="  
                    mb-5 flex  w-full relative 
                     flex-col-reverse items-center md:items-stretch md:flex-row md:justify-between "
        >
          <div
            className=" mt-1   md:min-w-max   
                      w-full   sm:w-3/4 md:w-48 
            "
          >
            <img
              src={referencePictures(props.data.pictureNumber)}
              alt="temp"
              className="
                     cover w-max 
                     md:border-4 dark:border-lightBg border-white
                      transform md:rotate-3
                     md:h-48 md:w-48 "
            />
            <div className=" mt-8  font-medium md:text-sm  text-center md:text-right">
              {props.data.date}
            </div>
          </div>
          <div
            className="
                md:pl-4
          "
          >
            <div className=" mt-6  md:mt-0 h-full  md:w-full flex flex-col justify-between sm:px-10  md:px-1">
              <div className="flex  justify-center md:justify-end  flex-wrap lg:pl-5 pt-2">
                {existTechniqIcons(props.data.icons).map((data, iterator) => (
                  <div className="mx-5 mb-3 " key={iterator}>
                    <img
                      src={data}
                      alt={`logo${iterator}`}
                      className={` w-4  ${
                        props.data.icons.length > 6
                          ? " sm:w-6   md:w-10 lg:w-16 "
                          : "sm:w-6 md:w-16 "
                      }     `}
                    />
                  </div>
                ))}
              </div>

              <div className="px-4 text-right hidden md:block">
                {props.data.publics.map((data, iterator) => (
                  <div key={`dps${iterator}`}>
                    <span>{data[0]}</span>
                    <span> : </span>

                    <a href={data[2]} target="_blank" rel="noreferrer">
                      {data[1]}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div
          className="
              
               px-4 sm:px-20  text-center md:hidden    
                flex flex-col items-start justify-center"
        >
          {props.data.publics.map((data, iterator) => (
            <div key={`dps${iterator}`} className="">
              <span>{data[0]}</span>
              <span className="mr-4"> : </span>

              <a href={data[2]} target="_blank" rel="noreferrer">
                {data[1]}
              </a>
            </div>
          ))}
        </div>

        <article
          className=" 
    
            "
        >
          <div
            className={` ease-in-out mt-12
                ${isOpen ? "h-full " : " h-0 overflow-hidden"} 
                flex flex-col lg:flex-row
            `}
          >
            <div className=" w-full  lg:w-1/2  pr-2">
              <div className="mb-3">{isLocalText[2]}</div>
              <div>{props.data.description}</div>
            </div>
            <div className=" w-full lg:w-1/2 lg:pl-2 mt-7  lg:mt-0 ">
              <div className="mb-3">{props.data.features.title} :</div>
              <ul className="ml-4 ">
                {props.data.features.datas.map((data, iterator) => (
                  <li key={`ft${iterator}`} className="list-disc">
                    {" "}
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className=" mt-4  md:mt-12 my-3 flex justify-center text-center cursor-pointer  "
            onClick={() => setOpen(!isOpen)}
          >
            <div
              className="  
                        flex items-center justify-center
                        w-3/4 xs:w-1/2 lg:w-1/4
                        py-2    cursor-pointer uppercase
                       border-b-2  border-yellow-600  "
            >
              <div className="transform rotate-180 ">
                <img
                  src={arrowIcon}
                  alt="ArrowIcon"
                  className="h-4  animate-arrowPulse "
                />
              </div>

              <span className="mx-3">{`${
                isOpen ? isLocalText[1] : isLocalText[0]
              }`}</span>
              <img
                src={arrowIcon}
                alt="ArrowIcon"
                className="h-4  animate-arrowPulse "
              />
            </div>
          </div>
        </article>
      </div>

      <article className="mt-16  ">
        <div className="mb-2 font-medium">{props.data.technologies.title} :</div>
        {props.data.technologies.technologieList.map((data, iterator) => (
          <div className="flex mb-2" key={iterator}>
            <div className="mr-3 ">{data.title}:</div>
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

export default OneReference;
