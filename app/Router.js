// Use this file to create all app navigators.

// import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

// For each navigator, import its screens. Each screen may be used in many navigators
// To add more screens, run yo rng:g screen <screen-name>

import ExampleScreen from "lol-stats/app/screens/ExampleScreen";
import WelcomeScreen from "lol-stats/app/screens/WelcomeScreen";
import ChampionsScreen from "lol-stats/app/screens/ChampionsScreen";

// You might want to add some navigator options to your navigator.
// You can edit this options in app/serivices/navigatorOptions.jsx
// import { stackNavigatorOptions } from 'axioma-native/app/services/navigatorOptions';
// import { ApplicationStyles } from "lol-stats/app/styles";

const AppNavigator = createStackNavigator(
    {
        ExampleScreen,
        WelcomeScreen,
        ChampionsScreen,
    },
    {
        initialRouteName: "ChampionsScreen",
        navigationOptions: {
            header: null,
        },
    },
);

export default createAppContainer(AppNavigator);
