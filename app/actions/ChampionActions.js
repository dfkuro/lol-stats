import ApiService from "lol-stats/app/services/ApiService";
// Declare action names as constants with uppercase string
export const GET_CHAMPION_BEGIN = "GET_CHAMPION_BEGIN";
export const GET_CHAMPION_SUCCESS = "GET_CHAMPION_SUCCESS";
export const GET_CHAMPION_FAILURE = "GET_CHAMPION_FAILURE";
export const RESET_CHAMPION = "RESET_CHAMPION";

// Thunk: this is a special type of action that can dispatch other actions
export function getChampion(name) {
    return async dispatch => {
        dispatch(getChampionBegin());
        // dispatch(getChampionSuccess({ example: "example" }));
        await ApiService.getChamp(name).then(
            result => {
                dispatch(getChampionSuccess(result.data));
            },
            error => {
                dispatch(getChampionFailure(error));
                throw new Error("There was an error loading the data.");
            },
        );
    };
}

// Action: Function that returns an object with action data for reducer
export const getChampionBegin = () => ({
    type: GET_CHAMPION_BEGIN,
});
export const getChampionSuccess = data => ({
    type: GET_CHAMPION_SUCCESS,
    payload: { data },
});
export const getChampionFailure = error => ({
    type: GET_CHAMPION_FAILURE,
    payload: { error },
});
export const resetChampion = () => ({
    type: RESET_CHAMPION,
});
