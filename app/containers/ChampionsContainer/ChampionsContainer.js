import React, { useState, useEffect } from "react";
// import { useStore } from "react-redux";
// import { Text, View } from "react-native";
// import useChampions from "lol-stats/app/hooks/useChampions";
// import axios from "lol-stats/app/utils/Axios";
// import PropTypes from "prop-types";
import ApiService from "lol-stats/app/services/ApiService";

export default function ChampionsContainer({ children }) {
    const [data, setData] = useState();
    const [name, setName] = useState("Pedro");

    const loadName = () => {
        setName("Juan");
    };

    useEffect(() => {
        const loadData = async () => {
            await ApiService.getChamp("Ahri").then(response => {
                setData(response.data.data.Ahri);
            });
        };

        loadData();
    }, [setData]);

    return children({ name, data }, loadName);
}
