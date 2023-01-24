import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

const FloorPlan = (props) => {
  return (
    <>
      <div>
        {props.name}
        <Kitchen name='Kitchen'/>
      </div>
      <div>
        {props.name}
        <LivingRoom name='Living Room'/>
      </div>
    </>
  );
}

export default FloorPlan;