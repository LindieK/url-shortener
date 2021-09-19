import axios from 'axios'
let url;

export const getShortenedURL = (inputValue) => {
    url = inputValue ? `https://api.shrtco.de/v2/shorten?url=${inputValue}` : ``;
    return axios.get(url).then(response => response)
}