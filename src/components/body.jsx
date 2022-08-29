import Education from "./education";
import References from "./references";
import SoftwareSkills from "./softwareSkills";
import Experience from "./experience";
function Body(props) {
  return (
    <div
      className="
          md:col-start-2 md:col-span-3 lg:col-span-4 xl:col-span-5
          font-poppins"
    >
      <Experience></Experience>
      <References></References>
      <SoftwareSkills></SoftwareSkills>
      <Education></Education>
    </div>
  );
}

export default Body;
