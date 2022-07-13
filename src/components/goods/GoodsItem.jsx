import React, { useContext } from 'react';
import { CustomContext } from '../../hooks/Context';

export const GoodsItem = (props) => {
	const { addOrder } = useContext(CustomContext);

	const {
		mainId,
		displayName: name,
		displayDescription: description,
		displayType: type,
		price,
		displayAssets: image,
	} = props;

	const newOrder = (e) => {
		e.preventDefault();
		addOrder({
			mainId,
			name,
			price: price.regularPrice,
			image: image[0].url
		});
	};

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
			<span style={{ fontWeight: 'bold' }}>{type}</span>
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
				<a href='!#' className='btn left' onClick={newOrder}>
					Buy
				</a>
				<strong className='right'>{price.regularPrice}$</strong>
			</div>
		</div>
	);
};
