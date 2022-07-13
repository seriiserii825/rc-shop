import React, { useContext } from 'react';
import { CustomContext } from '../hooks/Context';

export function Cart(props) {
	const { quantity } = props;
	const { toggleBasket } = useContext(CustomContext);

	return (
		<div className='cart blue darken-4 white-text' onClick={toggleBasket}>
			<i className='material-icons'>add_shopping_cart</i>
			<strong>{quantity}</strong>
		</div>
	);
}
