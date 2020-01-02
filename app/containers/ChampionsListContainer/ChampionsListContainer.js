/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import R from "ramda";
import { getChampions } from "lol-stats/app/actions/ChampionsActions";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

export default function ChampionsListContainer() {
    const dispatch = useDispatch();
    const champions = useSelector(state => state.Champions);

    useEffect(() => {
        dispatch(getChampions());
    }, []);

    return <View>{/* {championsData && championsData.keys.map(item => <Text>{item}</Text>)} */}</View>;
}

ChampionsListContainer.propTypes = {
    // data: PropTypes.array
};

ChampionsListContainer.defaultProps = {
    // data: []
};
