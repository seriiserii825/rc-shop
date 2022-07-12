import { GoodsItem } from './GoodsItem';
export const GoodsList = ({ goods }) => {
	return goods.length ? (
		<div className='grid'>
			{goods.map((good) => {
				return <GoodsItem key={good.mainId} {...good} />;
			})}
		</div>
	) : (
		<h2>No goods finded</h2>
	);
};
