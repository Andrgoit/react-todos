import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const getTodos = async () => {
  try {
    const { status, data } = await axios.get(URL);
    if (status !== 200) {
      throw new Error("Something wrong");
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getTodos;
