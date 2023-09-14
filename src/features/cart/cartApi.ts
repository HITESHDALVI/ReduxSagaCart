import axios from "axios";
import {URL} from "../../utilis/constants";
import {cartDataType} from "./cart-type";

export function fetchCart() {
  return axios.get(`${URL}/cart`);
}
export function addToCart(item: cartDataType) {
  return axios.post(`${URL}/cart`, item);
}
export function updateItem(id: number, item: {quantity: number}) {
  return axios.patch(`${URL}/cart/${id}`, item);
}
export function deleteItem(id: number) {
  return axios.delete(`${URL}/cart/${id}`);
}
