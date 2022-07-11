export const GoodsItem = (props) => {
	const { displayName as name, displayDescription as description, displayType as type, price } = props;
	return (
		<div className='card'>
			<div className='card-image'>
				<img src='images/sample-1.jpg' alt='' />
				<span className='card-title'>Card Title</span>
			</div>
			<div className='card-content'>
				<p>
					I am a very simple card. I am good at containing small bits
					of information. I am convenient because I require little
					markup to use effectively.
				</p>
			</div>
			<div className='card-action'>
				<a href='#'>This is a link</a>
			</div>
		</div>
	);
};
