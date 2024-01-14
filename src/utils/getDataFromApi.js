import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY_YOUTUBE_CLONE_REACT_JS_PROJECT,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const getDataFromApi = async (url)  => {
    try {
        const response = await axios.get(`${BASE_URL}/${url}`,options);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}
  
  