import axios from "axios";
import { toast } from "react-toastify";
const URL = import.meta.env.VITE_API_URL;

const getTodos = async () => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    toast.error(`${error.message}`);
  }
};

export default getTodos;
