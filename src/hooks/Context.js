import React, { createContext, useState } from 'react';

export const CustomContext = createContext();
export const Context = (props) => {
	const [orders, setOrders] = useState([]);

	const addOrder = (order) => {
		const orderIndex = orders.findIndex((o) => o.id === order.id);
		if (orderIndex < 0) {
			const newItem = {
				...order,
				quantity: 1,
			};
			setOrders([...orders, newItem]);
		} else {
			const newOrders = orders.map((o) => {
				if (o.id === order.id) {
					return {
						...o,
						quantity: o.quantity++,
					};
				}
				return o;
			});

			setOrders([newOrders]);
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
