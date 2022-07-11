import { GoodsItem } from './GoodsItem';
export const GoodsList = ({ goods }) => {
	return goods.length ? (
		goods.map((good) => {
			return <GoodsItem key={good.id} {...good} />;
		})
	) : (
		<h2>No goods finded</h2>
	);
};
