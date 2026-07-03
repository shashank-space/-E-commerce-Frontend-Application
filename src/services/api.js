import axios from "axios";

const API = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getAllProducts = async () => {
  const response = await API.get("/products");
  return response.data;
};

export const getProduct = async (id) => {
  const response = await API.get(`/products/${id}`);
  return response.data;
};

export const getCategories = async () => {
  const response = await API.get("/products/categories");
  return response.data;
};

export default API;