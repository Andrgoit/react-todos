import axios from "axios";
import { toast } from "react-toastify";
const URL = import.meta.env.VITE_API_URL;

const addTodo = async (todo) => {
  try {
    const { data } = await axios.post(URL, todo);
    return data;
  } catch (error) {
    toast.error(`${error.message}`);
  }
};

export default addTodo;
