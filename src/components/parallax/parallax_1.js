import React, { Component } from "react";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import TreeHouse from "../../resources/images/tree_house.jpg";
import MegaResidence from "../../resources/images/mega_residence.jpg";
import "./parallaxOnce.css";

class Parallax_1 extends Component {
  render() {
    const innerStyle = {
      position: "absolute",
      right: 0,
      top: 0
    };
    const outerStyle = {
      position: "absolute",
      left: 0,
      top: 0
    };

    return (
      <div>
        <ParallaxBanner
          className="parallax_11"
          layers={[
            {
              image:
                "https://images.unsplash.com/photo-1577346874380-ab576500317d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
              amount: 0.5
            }
          ]}
          style={{
            height: "500px"
          }}
        >
          <Parallax
            y={[35, 10]}
            x={[20, -70]}
            tagOuter="figure"
            className="parallax_container"
            styleInner={innerStyle}
          >
            <img
              src={TreeHouse}
              className="parallax_1"
              style={{ borderRadius: "25px" }}
            />
          </Parallax>
          <Parallax
            y={[-35, 20]}
            x={[-5, 70]}
            tagOuter="figure"
            className="parallax_container"
            styleOuter={outerStyle}
          >
            <img
              src={MegaResidence}
              className="parallax_1"
              style={{ borderRadius: "25px" }}
            />
          </Parallax>
        </ParallaxBanner>
      </div>
    );
  }
}

export default Parallax_1;
