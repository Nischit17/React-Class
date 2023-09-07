import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>ABOUT</h1>
      <h2>This is About page</h2>
      <User name={"Nischit (Function)  "} />
      <UserClass name={"Nischit (Classs)"} location={"DAVANAGERE"} />
    </div>
  );
};

export default About;
