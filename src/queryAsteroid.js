import axios from "axios";

export const getNeos = (start_date, end_date, api_key) => {
    return axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${api_key}`);
}