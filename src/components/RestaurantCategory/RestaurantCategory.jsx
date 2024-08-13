import { useState } from "react";
import ItemList from "../ItemList";

const RestaurantCategory = ({ data, itemCollapse, setShowIndex }) => {
  const [itemExpand, setItemExpand] = useState(itemCollapse);

  console.log("🚀 ~ RestaurantCategory ~ props:", data);
  return (
    <div className="cursor-pointer">
      {/* Acoordion Header */}
      <div className="w-6/12 mx-auto my-2 bg-gray-50 shadow-lg p-4 flex justify-between flex-col">
        <div
          onClick={() => {
            return (
              setShowIndex(),
              itemExpand ? setItemExpand(false) : setItemExpand(true)
            );
          }}
          className="flex justify-between"
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{itemExpand && itemCollapse ? "🔼" : "🔽"}</span>
        </div>
        {itemExpand && itemCollapse && <ItemList items={data.itemCards} />}
      </div>
      {/* Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
