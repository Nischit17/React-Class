import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  console.log(itemCards.length);

  // const { itemCardsNew } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card
  //     ?.itemCards;
  // console.log(
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card
  //     ?.itemCards
  // );
  // console.log(itemCardsNew.length);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h3></h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map(
          (item) => (
            console.log(item),
            (
              <li key={item.card.info.id}>
                {item.card.info.name} -{"Rs."}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </li>
            )
          )
        )}
        {/* <li>Burgers</li>
        <li>Diet Coke</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
