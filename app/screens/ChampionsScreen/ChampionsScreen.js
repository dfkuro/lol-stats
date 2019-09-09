import React from "react";
import { View } from "react-native";
import ChampionsListContainer from "lol-stats/app/containers/ChampionsListContainer";

import styles from "./ChampionsScreenStyle";

export default function ChampionsScreen() {
    return (
        <View style={styles.container}>
            <ChampionsListContainer />
        </View>
    );
}
