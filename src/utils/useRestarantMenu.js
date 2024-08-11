import { useEffect, useState } from "react";

const useRestarantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=" +
        resId
    );

    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestarantMenu;
