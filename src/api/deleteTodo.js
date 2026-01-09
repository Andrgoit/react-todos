import axios from "axios";
import { toast } from "react-toastify";
const URL = import.meta.env.VITE_API_URL;

const deleteTodo = async (id) => {
  try {
    const { data } = await axios.delete(`${URL}/${id}`);
    return data;
  } catch (error) {
    toast.error(`${error.message}`);
  }
};

export default deleteTodo;
