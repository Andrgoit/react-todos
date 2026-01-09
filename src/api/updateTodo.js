import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const updateTodo = async (id, update) => {
  try {
    const { status, data } = await axios.put(`${URL}/${id}`, update);
    if (status !== 200) {
      throw new Error("Something wrong");
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default updateTodo;
