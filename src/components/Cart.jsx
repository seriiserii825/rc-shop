import React, { useContext} from 'react';
import { CustomContext } from '../hooks/Context';

export function Cart(props) {
	const { quantity } = props;
	const { toggleBasket, cartWasChanged } = useContext(CustomContext);
	const cartDefaultClasses = 'cart darken-4 white-text';
  const cartClass = cartDefaultClasses + (cartWasChanged ? ' cart--active red' : ' blue');

	return (
		<div className={cartClass} onClick={toggleBasket}>
			<i className='material-icons'>add_shopping_cart</i>
			<strong>{quantity}</strong>
		</div>
	);
}
