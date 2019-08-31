import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "lol-stats/app/reducers";
import Reactotron from "lol-stats/config/ReactotronConfig";
import { middleware as beesMiddleware } from "redux-bees";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, beesMiddleware()),
    Reactotron.createEnhancer()
  )
);

export default store;
