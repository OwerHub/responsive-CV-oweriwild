import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import OneReference from "./oneReference";

function Reference(props) {
  const [text, settext] = useContext(TextContext);
  return (
    <div
      className="

            dark:bg-darkGray bg-lightBg md:bg-lightCard
            px-8 pb-6
            md:mt-4 md:mr-4 md:rounded-sm "
    >
      <header
        className="text-center  py-8   
      cardHead "
      >
        {text.references && text.references.title}
      </header>

      <section>
        {text.references &&
          text.references.referenceList.map((data, iterator) => (
            <OneReference key={`of${iterator}`} data={data}></OneReference>
          ))}
      </section>
    </div>
  );
}

export default Reference;
