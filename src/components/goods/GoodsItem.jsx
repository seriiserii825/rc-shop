export const GoodsItem = (props) => {
	const {
		displayName: name,
		displayDescription: description,
		displayType: type,
		price,
		displayAssets: image,
	} = props;
	return (
		<div
			className='card'
			style={{
				display: 'flex',
				flexDirection: 'column',
			}}>
			<div className='card-image'>
				<img src={image[0].url} alt='' />
				<span className='card-title'>{name}</span>
			</div>
			<div className='card-content'>{description}</div>
			<span style={{fontWeight: "bold"}}>{type}</span>
			<div
				className='card-action'
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					marginTop: 'auto',
					paddingBottom: '14px',
					height: '54px',
				}}>
				<a href='!#' className='btn left'>
					Buy
				</a>
				<strong className='right'>{price.regularPrice}$</strong>
			</div>
		</div>
	);
};
