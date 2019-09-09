import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import ChampionsContainer from "lol-stats/app/containers/ChampionsContainer";
import ImageAvatar from "lol-stats/app/components/ImageAvatar";
import styles from "./WelcomeScreenStyle";

export default function WelcomeScreen() {
    const { container } = styles;
    return (
        <ChampionsContainer>
            {({ name, data }, loadName) => {
                return (
                    <View style={container}>
                        {data && (
                            <>
                                <ImageAvatar
                                    uri={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${data.id}.png`}
                                />
                                <TouchableOpacity
                                    onPress={loadName}
                                    style={{
                                        backgroundColor: "pink",
                                        padding: 10,
                                        width: 80,
                                        border: 1,
                                        borderRadius: 5,
                                        alignItems: "center",
                                    }}
                                >
                                    <Text style={{ color: "black", fontWeight: "600" }}>{data.id}</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                );
            }}
        </ChampionsContainer>
    );
}
