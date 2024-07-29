

// _ 指父节点名字 -> language
import {SET_SYSTEM} from "@/redux/type.js";

const initState = {
  _: "👆",
  name: "nexusSearch",
  version: 1
}

const system = (state = initState, action) =>{
  switch (action.type){
    case SET_SYSTEM:
      return {
        ...state,
        version: action.payload
      }
    default:
      return state
  }
}

export default system