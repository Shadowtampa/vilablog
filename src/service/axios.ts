import axios from 'axios';

const instance = axios.create({
  baseURL: `https://www.googleapis.com/blogger/v3/blogs/${import.meta.env.VITE_BLOG_ID}/`,
  timeout: 10000, // Defina o timeout conforme necessário
  params: {
    key: import.meta.env.VITE_API_KEY, // Obtendo a API key do arquivo .env
  },
});

export default instance;