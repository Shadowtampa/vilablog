import axios from "axios";

export const bloggerInstance = axios.create({
  baseURL: `https://www.googleapis.com/blogger/v3/blogs/${import.meta.env.VITE_BLOG_ID}/posts/`,
  timeout: 1000,
  params: {
    key: import.meta.env.VITE_BLOGGER_API_KEY,
    maxResults: 10
  },
});