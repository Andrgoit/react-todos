import axios from "axios";
import { toast } from "react-toastify";
const URL = import.meta.env.VITE_API_URL;

const updateTodo = async (id, update) => {
  try {
    const { data } = await axios.put(`${URL}/${id}`, update);

    return data;
  } catch (error) {
    toast.error(`${error.message}`);
  }
};

export default updateTodo;
