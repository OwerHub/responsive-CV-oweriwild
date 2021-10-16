import Education from "./education";
import References from "./references";

function Body(props) {
  return (
    <div>
      <Education text={props.text}></Education>
      <References text={props.text}></References>
    </div>
  );
}

export default Body;
