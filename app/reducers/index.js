import { combineReducers } from "redux";
import Example from "lol-stats/app/reducers/ExampleReducer";
import { reducer as beesReducer } from "redux-bees";

const rootReducer = combineReducers({
  Example,
  bees: beesReducer
});

export default rootReducer;
