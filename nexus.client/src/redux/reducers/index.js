import {combineReducers} from "redux";
import system from "@/redux/reducers/system.js";



const appReducer = combineReducers({
  system: system
})

export default appReducer