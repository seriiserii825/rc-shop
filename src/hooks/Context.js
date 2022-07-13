import React, { createContext, useState } from 'react';

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

	const value = {
		orders,
		addOrder,
		isBasketVisible,
		toggleBasket,
	};

	return (
		<CustomContext.Provider value={value}>
			{props.children}
		</CustomContext.Provider>
	);
};
