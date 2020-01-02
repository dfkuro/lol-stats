import ApiService from "lol-stats/app/services/ApiService";
// Declare action names as constants with uppercase string
export const GET_CHAMPIONDETAIL_BEGIN = "GET_CHAMPIONDETAIL_BEGIN";
export const GET_CHAMPIONDETAIL_SUCCESS = "GET_CHAMPIONDETAIL_SUCCESS";
export const GET_CHAMPIONDETAIL_FAILURE = "GET_CHAMPIONDETAIL_FAILURE";
export const RESET_CHAMPIONDETAIL = "RESET_CHAMPIONDETAIL";

// Thunk: this is a special type of action that can dispatch other actions
export function getChampionDetail(champion) {
    return async dispatch => {
        // dispatch(getChampionDetailBegin());
        // dispatch(getChampionDetailSuccess({ example: "example" }));

        await ApiService.getChampionDetail(champion).then(
            result => {
                console.log(result);
                // dispatch(getChampionDetailSuccess(result));
            },
            error => {
                dispatch(getChampionDetailFailure(error));
                throw { error: error, message: "This is a demo error message" };
            },
        );
    };
}

// Action: Function that returns an object with action data for reducer
export const getChampionDetailBegin = () => ({
    type: GET_CHAMPIONDETAIL_BEGIN,
});
export const getChampionDetailSuccess = data => ({
    type: GET_CHAMPIONDETAIL_SUCCESS,
    payload: { data },
});
export const getChampionDetailFailure = error => ({
    type: GET_CHAMPIONDETAIL_FAILURE,
    payload: { error },
});
export const resetChampionDetail = () => ({
    type: RESET_CHAMPIONDETAIL,
});
