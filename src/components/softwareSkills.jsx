import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import softwareSkillsData from "../datas/softwareSkills.json";
import OneSkill from "./skillsComp/oneSkill";

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
    <div
      className="
        pb-4 md:pb-8
        bg-lightCard dark:bg-darkBlack 
        md:dark:bg-darkGray
          md:my-4 md:ml-4 md:rounded-sm "
    >
      <header className="text-center py-8 cardHead">
        {text.softwareSkills && text.softwareSkills.title}
      </header>

      <section className="flex flex-wrap justify-center">
        {objectToArray(softwareSkillsData).map((data, iterator) => (
          <OneSkill key={`os${iterator}`} count={iterator} data={data}></OneSkill>
        ))}
      </section>
    </div>
  );
};

export default SoftwareSkills;
