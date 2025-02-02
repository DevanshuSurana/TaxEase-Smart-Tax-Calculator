import axios from "axios";

const API_BASE_URL = "http://localhost:5001"; // Ensure this is correct

export const calculateTax = async (data) => {
    return await axios.post("http://localhost:5001/api/tax", data);
};
