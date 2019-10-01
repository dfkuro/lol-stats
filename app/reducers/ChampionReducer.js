/* eslint-disable no-console */
// Action names should be imported from their respective action modules
import {
    GET_CHAMPION_BEGIN,
    GET_CHAMPION_SUCCESS,
    GET_CHAMPION_FAILURE,
    RESET_CHAMPION,
} from "lol-stats/app/actions/ChampionActions";

// Example initial state
const initialState = {
    Champion: {},
    isLoading: false,
    error: "",
};

// Return a new state object with updated attributes
export default function ChampionReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_CHAMPION_BEGIN:
            return {
                ...state,
                isLoading: true,
            };
        case GET_CHAMPION_SUCCESS:
            // console.log(payload.data);
            return {
                ...state,
                Champion: payload.data,
                isLoading: false,
            };
        case GET_CHAMPION_FAILURE:
            return {
                ...state,
                error: payload.error.status,
                isLoading: false,
            };
        case RESET_CHAMPION:
            return {
                ...initialState,
            };
        default:
            return state;
    }
}
