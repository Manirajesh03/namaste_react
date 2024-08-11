import React from "react";
import User from "../User";
import UserClass from "../UserClass/UserClass";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constuctor");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Page Class</h1>
        {/* <User name={"Mani Rajesh Functional"} /> */}
        <UserClass name={"Mani Rajesh Class"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <User name={"Mani Rajesh Functional"} />
//       <UserClass name={"Mani Rajesh Class"} />
//     </div>
//   );
// };

export default About;
