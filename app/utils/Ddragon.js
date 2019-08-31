import axios from "axios";

const ddragonApiData = axios.create();

ddragonApiData.defaults.headers.common["Content-Type"] = "application/json";

export default { ddragonApiData };
