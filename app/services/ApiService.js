import axios from "lol-stats/app/utils/Axios";

export default {
    getChampions() {
        return axios.get("champion.json").then(response => response);
    },
    getChamp(champ) {
        return axios.get(`champion/${champ}.json`).then(response => response);
    },
};
