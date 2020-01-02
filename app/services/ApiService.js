import axios from "lol-stats/app/utils/Axios";

export default {
    getChampions() {
        return axios.get("champion.json").then(response => response);
    },
    getChampionDetail(champion) {
        return axios.get(`champion/${champion}.json`).then(response => response);
    },
};
