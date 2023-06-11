import { useState, useEffect } from "react";
import { FETCH_MENU_API } from "../config";

const useRestaurantInfo = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(FETCH_MENU_API + resId + "&submitAction=ENTER");
      const json = await data.json();
      const info = json?.data?.cards[0]?.card?.card?.info;
      setRestaurantInfo(info);
    } catch (error) {
      console.log(error);
    }
  }

  return restaurantInfo;
};

export default useRestaurantInfo;
