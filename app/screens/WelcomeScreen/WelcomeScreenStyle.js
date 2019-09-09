import { StyleSheet } from "react-native";
import { Colors, ApplicationStyles } from "lol-stats/app/styles";

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.flexBox,
    ...ApplicationStyles.margins,
    container: {
        backgroundColor: Colors.main,
        flex: 1,
    },
});
