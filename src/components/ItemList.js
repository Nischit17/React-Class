import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
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
              <span className="break-words text-base font-medium text-[#3e4152]">
                {item.card.info.name}
              </span>
              <span className="mt-[2px] flex items-center text-sm font-normal text-[#3e4152] py-2">
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="mt-1 w-[98%] text-sm leading-[1.3] tracking-tighter text-[#282c3f73]">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute ">
              <button
                className="flex px-2 py-2 mt-16 ml-16 cursor-pointer rounded border border-solid border-[#d4d5d9] bg-white text-[13px] font-semibold text-[#60b246] shadow-[0_3px_8px_#e9e9eb]"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <div className="flex  flex-col items-center justify-center">
              <img
                className="mb-[-30px] h-[96px] min-h-[96px] w-[118px] min-w-[118px] rounded-md"
                alt="resMenuImage"
                src={CDN_URL + item.card.info.imageId}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
