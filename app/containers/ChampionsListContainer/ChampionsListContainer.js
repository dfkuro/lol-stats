/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { getChampions } from "lol-stats/app/actions/ChampionsActions";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

export default function ChampionsListContainer() {
    const [champions, setChampions] = useState();

    const dispatch = useDispatch();
    dispatch(getChampions());
    setChampions(useSelector(champions => champions.data));
    console.log(champions);
    return <View>{/* {championsData && championsData.keys.map(item => <Text>{item}</Text>)} */}</View>;
}

ChampionsListContainer.propTypes = {
    // data: PropTypes.array
};

ChampionsListContainer.defaultProps = {
    // data: []
};
