import Champion from "lol-stats/app/reducers/ChampionReducer.js";
import Champions from "lol-stats/app/reducers/ChampionsReducer.js";
import { combineReducers } from "redux";
import Example from "lol-stats/app/reducers/ExampleReducer";
import { reducer as beesReducer } from "redux-bees";

const rootReducer = combineReducers({
    Example,
    bees: beesReducer,
    Champions,
    Champion,
});

export default rootReducer;
