import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const getTrendingMovies = async () => {
  const res = await axios.get(`${BASE_URL}/trending`);
  return res.data;
};