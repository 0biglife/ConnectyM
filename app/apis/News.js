import axios from 'axios';

export default axios.create({
  baseURL: 'https://newsapi.org/v2/',
});

// https://newsapi.org/v2/top-headlines?country=us&apiKey=14940aa1b8064dd1826db04e061120b2
