import { useContext } from "react";
import { CDN_URL } from "../../utils/constants";
import "./style.scss";
import UserContext from "../../utils/UserContext";

const RestaurantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { name, cuisines, avgRating, sla, cloudinaryImageId, id } =
    props.resData.info;
  return (
    <div className="m-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200 border-slate-900 shadow-md">
      <div className="" key={id}>
        <img
          src={CDN_URL + cloudinaryImageId}
          alt=""
          className="rounded-lg w-full h-48 object-cover"
        />
        <div className="card-info font-black py-4 px-4">
          <p className="cuisines text-black no-underline font-bold text-xl truncate text-ellipsis overflow-hidden ...">
            {name}
          </p>
          <p className="cuisines text-black text-sm truncate text-ellipsis overflow-hidden ...">
            {cuisines.join(",")}
          </p>
          <div className="d-flex justify-content-between card-details text-black">
            <p>{avgRating} Stars</p>
            <p>{sla.deliveryTime} mins</p>
            <p>{loggedInUser}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <span className="absolute bg-green-600 text-white mx-2 p-2 rounded-lg">
          Veg
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
