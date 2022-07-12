export function Cart(props) {
	const { quantity } = props;

	return (
		<div className='cart blue darken-4 white-text'>
			<i className='material-icons'>add_shopping_cart</i>
			<strong>{quantity}</strong>
		</div>
	);
}
