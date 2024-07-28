import {useSelector} from "react-redux";
import system from "@/redux/reducers/system.js";

function HomePage(){
  const version = useSelector((state) => state.system.version)
  return (
    <div className="text-3xl font-bold underline"> Home: test redux {version} </div>
  )
}

export default HomePage