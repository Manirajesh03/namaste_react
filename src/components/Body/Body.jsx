import { useState, useEffect } from "react";
import Search from "../Search";
import "./style.scss";
import RestaurantCard from "../RestaurantCard";
import Shimmer from "../Shimmer";

const Body = () => {
  const [restaList, setRestaList] = useState([]);
  const [showList, setShowList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    console.log(jsonData);
    setRestaList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setShowList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const restaFilter = () => {
    const filteredRestaurants = showList.filter((item) => {
      return item?.info?.avgRating > 4.3;
    });
    setShowList(filteredRestaurants);
  };

  console.log("restaList", restaList);

  useEffect(() => {
    console.log("Search TExt", searchText);
    if (searchText === "") {
      setShowList(restaList);
    } else {
      const data = [...restaList];
      console.log("Data", data);
      const filteredRes = data.filter((eachItem) =>
        eachItem?.info?.name.includes(searchText)
      );
      console.log("🚀 ~ useEffect ~ filteredRes:", filteredRes);
      setShowList(filteredRes);
    }
  }, [searchText]);

  return (
    <div className="body-container container mt-5">
      <div className="filter d-flex justify-content-end mb-3">
        <button className="filter-btn" onClick={() => restaFilter()}>
          Top Rated Restaurants
        </button>
      </div>
      <Search searchText={searchText} setSearchText={setSearchText} />

      {showList?.length === 0 && <Shimmer />}
      <div className="d-flex justify-content-center flex-wrap m-4">
        <RestaurantCard resData={showList} />
      </div>
    </div>
  );
};

export default Body;
