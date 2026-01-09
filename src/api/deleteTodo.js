import axios from "axios";
const URL = import.meta.env.VITE_API_URL;

const deleteTodo = async (id) => {
  try {
    const { data, status } = await axios.delete(`${URL}/${id}`);
    if (status !== 200) {
      throw new Error("Something wrong");
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default deleteTodo;
