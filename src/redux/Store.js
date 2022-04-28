import { createStore } from "redux";
import { redeucer } from "./reducer/index";

 const store =createStore(redeucer,{})
 export default store
