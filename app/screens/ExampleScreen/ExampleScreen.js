import React from "react";
import { Text, View } from "react-native";
import ImageAvatar from "lol-stats/app/components/ImageAvatar";
// import api from "lol-stats/app/utils/API.js";
// import { query } from "redux-bees";
import styles from "./ExampleScreenStyle";

// @query('champions', api.getChampions);
export default function ExampleScreen() {
    return (
        <View style={styles.container}>
            <Text>ExampleScreen</Text>
            <ImageAvatar uri="http://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Aatrox.png" />
        </View>
    );
}
