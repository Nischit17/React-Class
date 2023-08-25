import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([
    {
      info: {
        id: "10576",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.8,
        sla: {
          deliveryTime: 21,
        },
      },
    },
    {
      info: {
        id: "10575",
        name: "KFC",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.1,
        sla: {
          deliveryTime: 21,
        },
      },
    },
    {
      info: {
        id: "10577",
        name: "Dominos",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.5,
        sla: {
          deliveryTime: 21,
        },
      },
    },
  ]);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filterdList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
