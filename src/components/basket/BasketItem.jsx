import React, { useContext } from 'react';
import { CustomContext } from '../../hooks/Context';
export function BasketItem(props) {
	const { mainId, image, name, price, quantity } = props;
	const { removeOrder } = useContext(CustomContext);

	const removeBasketItem = (id) => {
		let remove = prompt('Are you sure you want to remove this item?', 'yes');
		remove && removeOrder(id);
	};

	return (
		<li className='basket__item collection-item'>
			<img width='80' src={image} alt='' />
			<h6>{name}</h6>
			<strong>{price}</strong>x<span>{quantity}</span> ={' '}
			<span>{price * quantity}</span>
			<button className='btn red' onClick={() => removeBasketItem(mainId)}>
				x
			</button>
		</li>
	);
}
