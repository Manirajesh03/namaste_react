import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import useRestarantMenu from "../../utils/useRestarantMenu";

const RestarantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestarantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
  const { text } = resInfo?.cards[0]?.card?.card;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{text}</h1>
      <h2>
        {cuisines.join(",")} - {costForTwoMessage}
      </h2>
      {itemCards?.map((eachItem) => {
        const { name, id, price } = eachItem.card.info;
        return (
          <ul key={id}>
            <li>
              {name} - {price / 100} INR
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default RestarantMenu;
