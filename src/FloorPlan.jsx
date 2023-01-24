import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  console.log(props)
  return (
    <>
      <div>
        <h1>{props.name}</h1>
        <Kitchen name='Kitchen'/>
        {/* {props.name} */}
        <Bath name='Bath' size='GIGANTIC ANCIENT HOUSE '/>
        <LivingRoom name='Living Room'/>
        <Bedroom name='Bedroom' bedNum={1}/>
        <Bath name='Bath' size='Half '/>
        <Bedroom name='Bedroom' bedNum={2}/>
        <Bath name='Bath' size='Full '/>
        <Bedroom name='Bedroom' bedNum={3}/>
        {/* Is there a way to add a space without adding a space in the string? */}
      
        {/* Mapping is best for big data, (no point for small data) */}

        {/* {bedNum.bedroom}
        {bedNum.bedroom?.map(bedroom =>
          <bedNum bedNum={[1, 2, 3]} />
          )}
          // bedNum is not a component (a component is reuseable HTML) */}
      </div>
    </>
  );
}

export default FloorPlan;