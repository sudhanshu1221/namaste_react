import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }
  componentDidMount() {
    console.log("parent  did mount called");
  }
  render() {
    console.log("Parent render is called");
    return (
      <div>
        <h1> This is About us Page</h1>
        {/* <User
        name={"Sudhanshu Kumar(function one)"}
        location={"Noida"}
        contact={"@sudhanshu1234"}
      /> */}
        <UserClass
          name={"first "}
          location={"Noida"}
          contact={"@sudhanshu1234"}
        />
      </div>
    );
  }
}
export default About;
