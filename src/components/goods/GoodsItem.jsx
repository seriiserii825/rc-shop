export const GoodsItem = (props) => {
	const {
		displayName: name,
		displayDescription: description,
		displayType: type,
		price,
	} = props;
	return (
		<div className='card'>
			<div className='card-image'>
				<img src='images/sample-1.jpg' alt='' />
				<span className='card-title'>{name}</span>
			</div>
			<div className='card-content'>{description}</div>
			<div className='card-action'>
				<span className="left">{price}$</span>
				<a href='!#'>This is a link</a>
			</div>
		</div>
	);
};
