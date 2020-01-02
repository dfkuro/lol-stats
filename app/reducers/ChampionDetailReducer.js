// Action names should be imported from their respective action modules
// import {
// 	GET_CHAMPIONDETAIL_BEGIN,
// 	 GET_CHAMPIONDETAIL_SUCCESS,
// 	GET_CHAMPIONDETAIL_FAILURE,
// 	RESET_CHAMPIONDETAIL,
// } from 'lol-stats/app/actions/ChampionDetailActions';

//Example initial state
const initialState = {
    ChampionDetail: {},
};

// Return a new state object with updated attributes
export default function ChampionDetailReducer(state = initialState, action) {
    switch (action.type) {
        // case GET_CHAMPIONDETAIL_BEGIN:
        // 	return {
        // 		...state,
        // 		isLoading: true
        // 	}
        // case  GET_CHAMPIONDETAIL_SUCCESS:
        // 	return {
        // 		...state,
        // 		items: action.payload.data.items,
        // 		isLoading: false
        // 	}
        // case GET_CHAMPIONDETAIL_FAILURE:
        // 	return {
        // 		...state,
        // 		error: action.payload.error.status,
        // 		isLoading: false
        // 	}
        // case RESET_CHAMPIONDETAIL:
        // 	return {
        // 		...initialState
        // 	}
        default:
            return state;
    }
}
