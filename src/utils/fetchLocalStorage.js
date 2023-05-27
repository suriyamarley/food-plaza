// saving user
export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};

// order info
export const fetchOrder = () => {
  const orderData = localStorage.getItem("foodorders")
    ? JSON.parse(localStorage.getItem("foodorders"))
    : [];

  return orderData;
};
