import React, { Component } from "react";
import { ParallaxBanner } from "react-scroll-parallax";

class Parallax_two extends Component {
  render() {
    return (
      <div>
        <ParallaxBanner
          className="parallax_11"
          layers={[
            {
              image:
                "https://images.unsplash.com/photo-1577128634316-64c3bb923763?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
              amount: 0.5
            }
          ]}
          style={{
            height: "500px"
          }}
        ></ParallaxBanner>
      </div>
    );
  }
}

export default Parallax_two;
