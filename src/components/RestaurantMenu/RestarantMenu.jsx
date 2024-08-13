import { useState } from "react";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import useRestarantMenu from "../../utils/useRestarantMenu";
import RestaurantCategory from "../RestaurantCategory/RestaurantCategory";

const RestarantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestarantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
  const { text } = resInfo?.cards[0]?.card?.card;

  const resCategories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("🚀 ~ RestarantMenu ~ resCategories:", resCategories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6">{text}</h1>
      <p className="font-bold text-xl">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {resCategories?.map((category, index) => (
        //Controlled Component
        <RestaurantCategory
          data={category?.card?.card}
          itemCollapse={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestarantMenu;
