import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import OneReference from "./oneReference";

function Reference(props) {
  const [text, settext] = useContext(TextContext);
  return (
    <div className="bg-darkGray text-white px-8 pb-6">
      <header className="text-center uppercase text-xl py-4">
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
