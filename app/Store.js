import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "lol-stats/app/reducers";
import Reactotron from "lol-stats/config/ReactotronConfig";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        Reactotron.createEnhancer(),
    ),
);

export default store;
