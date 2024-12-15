//write a class based function
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log(this.props.name + "child constructor called");
  }
  componentDidMount() {
    console.log(this.props.name + "child  did mount is called");
    //API call is done here
  }
  render() {
    console.log(this.props.name + "child render called");
    const { name, location, contact } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1> Count:{this.state.count}</h1>
        <button
          onClick={() => {
            //never update state variable directly it doesnt change the ui directly
            // this.state.count = this.state.count + 1;
            //only the count will be updated and rest will be untouched
            this.setState({
              count: count + 1,
            });
            // console.log(this.state);
          }}
        >
          Increment no
        </button>
        {/* <h2> count2:{count2}</h2> */}
        <h2> Name:{name}</h2>
        <h3> Location:{location}</h3>
        <h4> Contact:{contact}</h4>
      </div>
    );
  }
}

export default UserClass;
