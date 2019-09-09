import React from "react"; // useState // useEffect,
import { Text } from "react-native";
import { string } from "prop-types";
import { Fonts, Colors } from "lol-stats/app/styles";
// import styles from "./TextComponentStyle";

export default function TextComponent(props) {
    const { style, weight, size, color, align, text } = props;
    return (
        <Text
            weight={weight}
            size={size}
            color={color}
            align={align}
            style={[
                style,
                {
                    fontWeight: Fonts.weight[weight],
                    fontSize: Fonts.size[size],
                    color: Colors[color],
                    textAlign: align,
                },
            ]}
        >
            {text}
        </Text>
    );
}

TextComponent.propTypes = {
    text: string,
    color: string,
    weight: string,
    size: string,
    align: string,
};

TextComponent.defaultProps = {
    text: "",
    color: "dark",
    weight: "regular",
    size: "body",
    align: "center",
};
