/* eslint-disable no-console */
// Action names should be imported from their respective action modules
import {
    GET_CHAMPIONS_BEGIN,
    GET_CHAMPIONS_SUCCESS,
    GET_CHAMPIONS_FAILURE,
    RESET_CHAMPIONS,
} from "lol-stats/app/actions/ChampionsActions";
import ApiService from "lol-stats/app/services/ApiService";

// Example initial state
const initialState = {
    Champions: {},
    isLoading: false,
    error: "",
};

// Return a new state object with updated attributes
export default function ChampionsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_CHAMPIONS_BEGIN:
            return {
                ...state,
                isLoading: true,
            };
        case GET_CHAMPIONS_SUCCESS:
            return {
                ...state,
                champions: payload.data.data,
                isLoading: false,
            };
        case GET_CHAMPIONS_FAILURE:
            return {
                ...state,
                error: payload.error.status,
                isLoading: false,
            };
        case RESET_CHAMPIONS:
            return {
                ...initialState,
            };
        default:
            return state;
    }
}
