import { combineReducers } from "redux";
import reducer_1 from "../reducers/reducer_1";
import reducer_2 from "./reduсer_2";

const reducer = combineReducers({
    reducer_1,
    reducer_2
 }); 

export default reducer;