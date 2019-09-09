import * as axios from "axios";

const instance = axios.create();

instance.defaults.baseURL = "http://ddragon.leagueoflegends.com/cdn/9.17.1/data/es_MX/";
instance.defaults.timeout = 20000;

export default instance;
