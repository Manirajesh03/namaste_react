import { CDN_URL } from "../../utils/constants";
import "./style.scss";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId, id } =
    props.resData.info;
  return (
    <div className="m-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200 border-slate-900">
      <div className="" key={id}>
        <img
          src={CDN_URL + cloudinaryImageId}
          alt=""
          className="rounded-lg w-full h-48"
        />
        <div className="card-info py-4 px-4">
          <p className="cuisines font-bold text-xl">{name}</p>
          <p className="cuisines text-sm truncate text-ellipsis overflow-hidden ...">
            {cuisines.join(",")}
          </p>
          <div className="d-flex justify-content-between card-details">
            <p>{avgRating} Stars</p>
            <p>{sla.deliveryTime} mins</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
