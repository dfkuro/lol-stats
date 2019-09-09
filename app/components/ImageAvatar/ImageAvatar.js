import React from "react";
import { Image } from "react-native";
import { string, func, number } from "prop-types";
// import styles from "./ImageAvatarStyle";

/**
 * Crea un avatar para mostrar una imagen.
 */
export default function ImageAvatar(props) {
    const { uri, size } = props;
    return (
        <>
            <Image style={{ height: size, width: size }} source={{ uri }} />
        </>
    );
}

ImageAvatar.propTypes = {
    /**
     * Url que se envia al component para cargar la imagen
     */
    uri: string,
    /**
     * Permite establecer el tamaño que tendra la imagen
     */
    size: number,
};

ImageAvatar.defaultProps = {
    uri: "",
    size: 80,
};
