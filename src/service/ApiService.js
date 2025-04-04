import axios from "axios";

const API_URL = "http://localhost:8080";

const signup = async (userdata) => {
  try {
    const response = await axios.post(`${API_URL}/api/users/signup`, userdata);
    console.log("our response", response);
    return response.data;
  } catch (error) {
    // Better handling of error messages
    throw error.response ? error.response.data : { message: "An error occurred!" };
  }
};

const login = async (userdata) => {
  try {
    const response = await axios.post(`${API_URL}/api/users/login`, userdata);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: "An error occurred!" };
  }
};

export default { signup, login };
