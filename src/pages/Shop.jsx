import React, { useEffect, useState, useContext } from 'react';
import { API_KEY, API_URL } from '../settings/config';
import { GoodsList } from '../components/goods/GoodsList';
import { Preloader } from '../components/ui/Preloader';
import { Cart } from '../components/Cart';
import { CustomContext } from '../hooks/Context';

export function Shop() {
	const { orders } = useContext(CustomContext);

	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: `${API_KEY}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (!data.result) {
					setError(data.code);
				}
				// console.log(data.shop, 'data.shop')
				setGoods(data.shop);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error.response, 'error.response');
				setLoading(false);
			});
	}, []);
	return (
		<div className='container'>
			{<Cart quantity={orders.length} />}
			{error ? (
				<h2>{error}</h2>
			) : loading ? (
				<Preloader />
			) : (
				<GoodsList goods={goods} />
			)}
		</div>
	);
}
