import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dummy = "Dummy Data";

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  const itemCardsNew =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card
      ?.itemCards;

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  const handleToggleAccordion = (index) => {
    if (index === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        // Controlled Component
        <RestaurantCategory
          index={index}
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={showIndex}
          setShowIndex={handleToggleAccordion}
          dummy={dummy}
        />
      ))}
      {/* <h2>Menu</h2>
      <ul>
        {itemCardsNew
          ? itemCardsNew.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} -{"Rs."}
                {item.card.info.price / 100}
              </li>
            ))
          : itemCards.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} -{"Rs."}
                {item.card.info.price / 100}
              </li>
            ))}

        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
