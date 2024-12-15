//write a class based function
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "dummy",
        id: "null",
      },
    };
    console.log(this.state.login + "child constructor called");
  }
  async componentDidMount() {
    console.log(this.state.login + "child  did mount is called");
    //API call is done here
    const data = await fetch("https://api.github.com/users/sudhanshu1221");
    const dataJSON = await data.json();
    this.setState({
      userInfo: dataJSON,
    });
    // console.log(dataJSON);
  }
  componentDidUpdate() {
    console.log("component did update called");
  }
  componentWillUnmount() {
    console.log("component will unmount called");
  }
  render() {
    const { login, avatar_url, id } = this.state.userInfo;
    console.log(login + "child render called");
    // debugger;
    return (
      <div className="user-card">
        <img src={avatar_url} sizes="small" />
        <h2> Name:{login}</h2>
        <h4> id:{id}</h4>
      </div>
    );
  }
}

export default UserClass;
