import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import softwareSkillsData from "../datas/softwareSkills.json";
import OneSkill from "./oneSkill";

const SoftwareSkills = () => {
  const [text, setText] = useContext(TextContext);

  const objectToArray = (data) => {
    let array = [];
    for (const [key, value] of Object.entries(data)) {
      array.push([key, value]);
    }
    return array;
  };

  return (
    <div className="bg-darkBlack text-white">
      <header className="text-center py-5 uppercase text-xl">
        {text.softwareSkills && text.softwareSkills.title}
      </header>

      <section className="flex flex-wrap justify-center">
        {objectToArray(softwareSkillsData).map((data, iterator) => (
          <OneSkill key={`os${iterator}`} data={data}></OneSkill>
        ))}
      </section>
    </div>
  );
};

export default SoftwareSkills;
