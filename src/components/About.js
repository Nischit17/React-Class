import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>ABOUT CLASS COMPONENT</h1>
        <h2>This is About page</h2>
        <UserClass name={"First"} location={"DAVANAGERE CLASSS"} />
        <UserClass name={"Second"} location={"US"} />
      </div>
    );
  }
}
export default About;
