import Sink from "./Sink"
import Oven from "./Oven"

const Kitchen = (props) => {
  return (
    <>
      <div>
        <Oven name={"Oven"}/>
        <Sink name={"Sink"}/>
        {/* Setting the properties of Oven and Sink */}
      </div>
    </>
  )
}

export default Kitchen