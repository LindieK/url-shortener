import axios from 'axios'

export const getShortenedURL = (inputValue) => {
  if(inputValue){
    const url = `https://api.shrtco.de/v2/shorten?url=${inputValue}`;
    return axios.get(url).then(respose => response)
  }
}
