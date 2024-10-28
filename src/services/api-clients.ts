import axios from "axios";
import config from "./config.json"

export default axios.create({
    params: {
        key: config.apiKey,
    },
    baseURL: "https://api.rawg.io/api"
})