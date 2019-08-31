import React from "react";
import { Text, View } from "react-native";
import HelloWorld from "lol-stats/app/components/HelloWorld";
import api from "lol-stats/app/utils/API.js";
import { query } from "redux-bees";
import styles from "./ExampleScreenStyle";

// @query('champions', api.ge7tChampions);
export default function ExampleScreen(props) {
  // eslint-disable-next-line no-console
  // console.log(useSelector((state) => state));
  return (
    <View style={styles.container}>
      <Text>ExampleScreen</Text>
      <HelloWorld />
    </View>
  );
}
