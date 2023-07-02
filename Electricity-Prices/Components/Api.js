// src/utils/api.js
import axios from "axios";

const BASE_URL = "https://something.com/prices";

export const fetchElectricityPrices = async (zone) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");

  const url = `${BASE_URL}/${year}/${month}-${day}_${zone}.json`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch electricity prices");
  }
};
