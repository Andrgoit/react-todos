import axios from "axios";
import { toast } from "react-toastify";
const URL = import.meta.env.VITE_API_URL;

const completeTodo = async (id, update) => {
  try {
    const { data } = await axios.patch(`${URL}/${id}`, update);

    return data;
  } catch (error) {
    toast.error(`${error.message}`);
  }
};

export default completeTodo;
