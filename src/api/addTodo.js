import axios from "axios";
const URL = import.meta.env.VITE_API_URL;

const addTodo = async (todo) => {
  try {
    const { data, status } = await axios.post(URL, todo);
    if (status !== 201) {
      throw new Error("Something wrong");
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default addTodo;
