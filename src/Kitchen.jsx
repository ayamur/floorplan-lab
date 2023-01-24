import Sink from "./Sink"
import Oven from "./Oven"

const Kitchen = (props) => {
  return (
    <>
      <div>
        <h2>{props.name}</h2>
        <Oven name={"Oven"}/>
        <Sink name={"Sink"}/>
        {/* Setting the properties of Oven and Sink */}
      </div>
    </>
  )
}

export default Kitchen