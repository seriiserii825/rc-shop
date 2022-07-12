import React, { createContext, useState } from 'react';

export const CustomContext = createContext();
export const Context = (props) => {
	const [orders, setOrders] = useState([]);

	const addOrder = (order) => {
		setOrders([...orders, order]);
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
