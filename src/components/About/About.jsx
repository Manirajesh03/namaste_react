import React from "react";
import User from "../User";
import UserClass from "../UserClass/UserClass";
import UserContext from "../../utils/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About Page Class</h1>
        <div>
          LoggedIn User:{" "}
          <UserContext.Consumer>
            {(data) => <span>{data.loggedInUser}</span>}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Mani Rajesh Class"} />
      </div>
    );
  }
}

export default About;
