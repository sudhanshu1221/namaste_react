import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor called");
  }
  componentDidMount() {
    // console.log("parent  did mount called");
  }
  render() {
    // console.log("Parent render is called");
    return (
      <div>
        <UserClass />
      </div>
    );
  }
}
export default About;
