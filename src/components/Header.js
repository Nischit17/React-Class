import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="flex justify-between bg-orange-100 shadow-lg">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex px-4">
          <li className="px-4  py-2">
            ONLINE STATUS: {onlineStatus ? "🔋" : "🚨"}
          </li>
          <li className="px-4 py-2">
            <Link to={"/"}>HOME</Link>
          </li>
          <li className="px-4 py-2">
            <Link to={"/About"}>ABOUT US</Link>
          </li>
          <li className="px-4 py-2">
            <Link to={"/Contact"}>CONTACT US</Link>
          </li>
          <li className="px-4 py-2">
            <Link to={"/grocery"}>GROCERY</Link>
          </li>
          <li className="px-4 py-2 pr-8">CART</li>
          <button
            className="px-5 py-2 bg-blue-200 rounded-lg"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>

          <li className="px-4 py-2 pr-8 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
