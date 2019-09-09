import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "lol-stats/app/Store.js";
import NavigationService from "lol-stats/app/services/NavigationService.js";
import "lol-stats/config/ReactotronConfig";
import AppNavigator from "./app/Router";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };
    }

    // const reduxStore = store;
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <AppNavigator
                        ref={navigatorRef => {
                            NavigationService.setTopLevelNavigator(navigatorRef);
                        }}
                    />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
