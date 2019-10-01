/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { getChampions } from "lol-stats/app/actions/ChampionsActions";
import { getChampion } from "lol-stats/app/actions/ChampionActions";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

export default function ChampionsListContainer() {
    const [champions, setChampions] = useState({});
    const [champion, setChampion] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChampion("Ahri"));
    }, []);
    let champ = useSelector(state => state.Champion);
    // setChampion(champ);

    // const champs = useSelector(state => state.Champions);

    champ.Champion.data && console.log(champ.Champion.data.Ahri.id);

    // champs && console.log(champs.Champion);
    return (
        <View>
            <Text>Dfkuro</Text>
            {/* {champions && champions.Champion.data["Ahri"].id} */}
            {/* {championsData && championsData.keys.map(item => <Text>{item}</Text>)} */}
        </View>
    );
}

ChampionsListContainer.propTypes = {};

ChampionsListContainer.defaultProps = {};
