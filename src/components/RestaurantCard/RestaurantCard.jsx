import { CDN_URL } from "../../utils/constants";
import "./style.scss";

const RestaurantCard = (props) => {
  console.log("🚀 ~ RestaurantCard ~ props:", props);
  return (
    <div
      className="d-flex flex-wrap justify-content-center"
      style={{ gap: "20px" }}
    >
      {props?.resData?.map((item) => {
        const {
          name,
          cuisines,
          avgRating,
          sla,
          costForTwo,
          cloudinaryImageId,
          id,
        } = item.info;
        return (
          <div className="card d-flex align-items-center resto-card" key={id}>
            <img src={CDN_URL + cloudinaryImageId} alt="" width="200" />
            <div className="card-info">
              <p className="cuisines">{name}</p>
              <p className="cuisines">{cuisines.join(",")}</p>
              <div className="d-flex justify-content-between card-details">
                <p>{avgRating} Stars</p>
                <p>{sla.deliveryTime} mins</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantCard;
