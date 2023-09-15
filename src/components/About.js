import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  componentWillUnmount() {
    // console.log("Component will unmount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>ABOUT CLASS COMPONENT</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-lg font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is About page</h2>
        <UserClass name={"First"} location={"DAVANAGERE CLASSS"} />
      </div>
    );
  }
}
export default About;
