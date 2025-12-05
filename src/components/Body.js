import RestaurantCard from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2004765&lng=72.8736892&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    const onlyValidRestaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter(
        (r) => r?.info
      ) || [];

    setListOfRestaurants(onlyValidRestaurants);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info?.avgRatingString > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants
          .filter((r) => r?.info)
          .map((restaurant, index) => (
            <RestaurantCard
              key={restaurant.info?.id || index}
              resData={restaurant.info}
            />
          ))}
      </div>
    </div>
  );
};

export default Body;
