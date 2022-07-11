import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../settings/config';
import { GoodsList } from '../components/goods/GoodsList';
import { Preloader } from '../components/ui/Preloader';

export function Shop() {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: `${API_KEY}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setGoods(data.shop);
				console.log(data.shop, 'data.shop')
				setLoading(false);
				console.log(goods, 'goods');
			})
			.catch((error) => {
				console.log(error.response, 'error.response');
				setLoading(false);
			});
	}, [goods]);
	return (
		<div className='container'>
			{loading ? <Preloader /> : <GoodsList goods={goods} />}
		</div>
	);
}
