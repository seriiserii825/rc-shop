import React, { createContext, useState } from 'react';

export const CustomContext = createContext();
export const Context = (props) => {
	const [orders, setOrders] = useState([]);

	const addOrder = (order) => {
		if (orders.length === 0) {
			setOrders([order]);
		} else {
			let existsItem = orders.some((i) => i.mainId === order.mainId);
			if (!existsItem) {
				setOrders([...orders, order]);
			}
		}
	};

	const value = {
		orders,
		addOrder,
	};

	return (
		<CustomContext.Provider value={value}>
			{props.children}
		</CustomContext.Provider>
	);
};
