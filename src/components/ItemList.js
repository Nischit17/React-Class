import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItems("pizza"));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute ">
              <button
                className="p-2 mx-[68] rounded-lg  bg-black text-white shadow-lg mt-[86]"
                onClick={handleAddItem}
              >
                Add +
              </button>
            </div>
            <img alt="resMenuImage" src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
