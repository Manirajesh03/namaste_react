import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Default Name",
        loaction: "Default Location",
        avatar_url: "",
      },
    };

    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/manirajesh03");
    const json = await data.json();
    console.log("🚀 ~ About ~ componentDidMount ~ json:", json);
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    alert("Bye");
    console.log("Component Will Unmount");
  }

  render() {
    const { name, location } = this.props;
    const { login, avatar_url } = this.state.userInfo;
    // console.log("Child Render");
    return (
      <div className="user-card">
        Class Component
        <img src={avatar_url} alt="" />
        <h2>Name: {login}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: </h4>
      </div>
    );
  }
}

export default UserClass;
