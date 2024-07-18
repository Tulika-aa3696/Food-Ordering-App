import React, { useState } from "react";
import Restaurant from "./Restaurant";
import resList from "../../utils/mockData";

const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for restaurants..." />
        <button type="button">Search</button>
      </div>
      <div className="Filter">
        <button
          className="Filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurant.map((restaurant) => (
          <Restaurant key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
