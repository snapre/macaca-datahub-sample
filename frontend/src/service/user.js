import axios from "axios";

// https://vitejs.dev/guide/env-and-mode.html#env-variables
const BASE_URL = import.meta.env.VITE_BASE_URL;

const userService = {
  getUserByUsername: async (username) => {
    const url = `${BASE_URL}/api/v2/user/${username}`;
    const response = await axios.get(url);
    return response.data;
  },
  createUser: async (user) => {
    const url = `${BASE_URL}/api/v2/user`;
    const response = await axios.post(url, user);
    return response.data;
  },
}

export default userService;
