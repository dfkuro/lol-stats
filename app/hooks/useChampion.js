import {
    // useEffect,
    useState,
} from "react";
import Selectors from "lol-stats/app/Selectors";
// import {
// 	useSelector,
// 	useDispatch
// } from "react-redux";

export default function(initialState) {
    const [state, setState] = useState(initialState);
    return [state, dispatch];
}

// Example
// import { useQuery } from 'react-query-hooks';
// import { fetchuseChampion } from 'lol-stats/app/actions/useChampionActions';
// import Selectors from 'lol-stats/app/Selectors';

// export default function ( { forceFirstFetch = false, skipFirstFetch = false } = {} ) {

// 	const dispatch = useDispatch();
// 	const useChampionStoreData = useSelector(Selectors.selectchampion);
// 	const useChampionLoaded = true;
// 	const skip = (skipFirstFetch || useChampionLoaded) && !forceFirstFetch;
// 	const useChampionLoader = useQuery(() => dispatch(fetchuseChampion()), { skip });
// 	return [ useChampionStoreData, useChampionLoader ];
// }
