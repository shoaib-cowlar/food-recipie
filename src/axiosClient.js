import axios from "axios";
import config from "./config/config";

const axiosClient = axios.create({
    baseURL : config.BASE_URI
})

export default axiosClient