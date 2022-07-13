import React, { useContext } from 'react';
import { CustomContext } from '../../hooks/Context';
import { BasketItem } from './BasketItem';

export function BasketList() {
	const { orders } = useContext(CustomContext);
	const { toggleBasket } = useContext(CustomContext);
	const total = orders.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);
	return (
		<div className='basket'>
			<ul className='basket__list collection'>
				<li className='basket__item collection-item active'>
					<h5>Basket</h5>
					<button className='btn red' onClick={toggleBasket}>
						x
					</button>
				</li>
				{orders.length ? (
					orders.map((item) => (
						<BasketItem key={item.mainId} {...item} />
					))
				) : (
					<h5>Empty</h5>
				)}
				<li className='collection-item blue darken-2 white-text'>
					<strong>Total</strong>: {total}
				</li>
			</ul>
		</div>
	);
}
