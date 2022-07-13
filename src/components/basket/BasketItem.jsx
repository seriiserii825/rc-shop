export function BasketItem(props) {
	const { mainId, image, name, price, quantity } = props;
	return (
		<li className='basket__item collection-item'>
      <img width="80" src={image} alt="" />
			<h6>{name}</h6>
			<strong>{price}</strong>x<span>{quantity}</span> = <span>{price * quantity}</span>
      <button className="btn red">x</button>
		</li>
	);
}
