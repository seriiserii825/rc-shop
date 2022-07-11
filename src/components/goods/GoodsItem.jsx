export const GoodsItem = (props) => {
	const {
		displayName: name,
		displayDescription: description,
		displayType: type,
		price,
		displayAssets: image,
	} = props;
	console.log(image[0].url, 'image');
	return (
		<div className='card'>
			<div className='card-image'>
				<img src={image[0].url} alt='' />
				<span className='card-title'>{name}</span>
			</div>
			<div className='card-content'>{description}</div>
			<div className='card-action'>
				<span className='left'>{price.regularPrice}$</span>
				<a href='!#'>This is a link</a>
			</div>
		</div>
	);
};
