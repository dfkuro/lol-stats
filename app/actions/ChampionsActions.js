/* eslint-disable no-console */
import ApiService from "lol-stats/app/services/ApiService";
import R from "ramda";
// Declare action names as constants with uppercase string
export const GET_CHAMPIONS_BEGIN = "GET_CHAMPIONS_BEGIN";
export const GET_CHAMPIONS_SUCCESS = "GET_CHAMPIONS_SUCCESS";
export const GET_CHAMPIONS_FAILURE = "GET_CHAMPIONS_FAILURE";
export const RESET_CHAMPIONS = "RESET_CHAMPIONS";

// Thunk: this is a special type of action that can dispatch other actions

export function getChampions() {
    console.log("Getting champions");
    return async dispatch => {
        // dispatch(getChampionsBegin());
        // dispatch(getChampionsSuccess({ example: "example" }));
        await ApiService.getChampions().then(
            result => {
                // const data = R.keys(result.data.data);
                const data = R.take(10, R.keys(result.data.data));
                dispatch(getChampionsSuccess(data));
            },
            error => {
                dispatch(getChampionsFailure(error));
                throw new Error("This is an error");
            },
        );
    };
}

// Action: Function that returns an object with action data for reducer
export const getChampionsBegin = () => ({
    type: GET_CHAMPIONS_BEGIN,
});
export const getChampionsSuccess = data => ({
    type: GET_CHAMPIONS_SUCCESS,
    payload: { data },
});
export const getChampionsFailure = error => ({
    type: GET_CHAMPIONS_FAILURE,
    payload: { error },
});
export const resetChampions = () => ({
    type: RESET_CHAMPIONS,
});
