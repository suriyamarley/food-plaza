import { fetchOrder, fetchUser } from "../utils/fetchLocalStorage";

const userInfo = fetchUser();
const orderInfo = fetchOrder();

export const initialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
  orders: orderInfo,
};
