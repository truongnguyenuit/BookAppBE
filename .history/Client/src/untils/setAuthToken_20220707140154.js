import axios from "axios";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    de
  }
}

export default setAuthToken