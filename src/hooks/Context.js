import React, { createContext, useState } from "react";

export const CustomContext = createContext();
export const Context = (props) => {
  const [orders, setOrders] = useState([]);
  const [isBasketVisible, setIsBasketVisible] = useState(false);

  const toggleBasket = () => {
    setIsBasketVisible(!isBasketVisible);
  };

  const addOrder = (order) => {
    let existsItem = orders.some((i) => i.mainId === order.mainId);
    if (!existsItem) {
      let newOrders = [...orders, { ...order, quantity: 1 }];
      setOrders(newOrders);
    } else {
      let newOrders = orders.map((item) => {
        if (item.mainId === order.mainId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setOrders(newOrders);
    }
  };

  const removeOrder = (id) => {
    let filteredOrders = orders.filter((item) => item.mainId !== id);
    setOrders(filteredOrders);
  };

  const incQuantity = (id) => {
    let newOrders = orders.map((item) => {
      if (item.mainId === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setOrders(newOrders);
  };

  const decQuantity = (id) => {
    let newOrders = orders.map((item) => {
      if (item.mainId === id) {
        return { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 };
      }
      return item;
    });
    setOrders(newOrders);
  };

  const value = {
    orders,
    addOrder,
    isBasketVisible,
    toggleBasket,
    removeOrder,
    incQuantity,
    decQuantity,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
