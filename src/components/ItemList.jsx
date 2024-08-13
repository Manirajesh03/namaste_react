import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("🚀 ~ ItemList ~ items:", items);
  return (
    <div className="my-4">
      <div>
        {items?.map((item) => (
          <div key={item?.card?.info?.id} className="flex flex-col my-4">
            <div className="flex justify-between">
              <div className="font-bold text-xl text-left">
                <p>{item?.card?.info?.name}</p>
                <p>{item?.card?.info?.price / 100 + ".00"} INR</p>
              </div>
              <span className="font-bold text-l w-28">
                <img src={CDN_URL + item?.card?.info?.imageId} alt="" />
              </span>
            </div>
            <div className="flex justify-between my-2">
              <p className="text-left w-10/12">
                {item?.card?.info?.description}
              </p>
              <button className="bg-blue-700 px-4 py-2 rounded-lg">Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
