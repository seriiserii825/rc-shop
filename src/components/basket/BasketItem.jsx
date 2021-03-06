import React, { useContext } from "react";
import { CustomContext } from "../../hooks/Context";
export function BasketItem(props) {
  const { mainId, image, name, price, quantity } = props;
  const { removeOrder, incQuantity, decQuantity } = useContext(CustomContext);

  const removeBasketItem = (id) => {
    let remove = prompt("Are you sure you want to remove ?", `${name}`);
    remove && removeOrder(id);
  };

  return (
    <li className="basket__item collection-item">
      <img width="80" src={image} alt="" />
      <h6>{name}</h6>
      {price}({quantity})
      <i className="material-icons basket__icon" onClick={() => decQuantity(mainId)}>remove_circle</i>x
      <i className="material-icons basket__icon" onClick={() => incQuantity(mainId)}>add_circle</i>
      = <span>{price * quantity}</span>
      <button className="btn red" onClick={() => removeBasketItem(mainId)}>
        x
      </button>
    </li>
  );
}
