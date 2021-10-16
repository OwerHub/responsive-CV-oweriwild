import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import OneReference from "./oneReference";

function Reference(props) {
  const [text, settext] = useContext(TextContext);
  return (
    <div className="bg-darkGray text-white px-8">
      <div className="text-center uppercase text-xl py-4">
        {text.references && text.references[0]}
      </div>
      <div>
        {text.references &&
          text.references[1].map((data, iterator) => (
            <OneReference key={`of${iterator}`} data={data}></OneReference>
          ))}
      </div>
    </div>
  );
}

export default Reference;
