import React, { Component } from "react";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import image1 from "../../resources/images/slide_one.jpg";
import "./parallaxOnce.css";

class Parallax_1 extends Component {
  render() {
    return (
      <div>
        <ParallaxBanner
          className="parallax_11"
          layers={[
            {
              image:
                "https://images.unsplash.com/photo-1573164713350-b14a82d3c15b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
              amount: 0.1
            }
            // {
            //   image:
            //     "https://images.unsplash.com/photo-1573497491306-c8a68afac6f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
            //   amount: 0.9
            // }
          ]}
          style={{
            height: "500px"
          }}
        >
          <Parallax
            y={[-20, 20]}
            x={[-5, 20]}
            tagOuter="figure"
            className="parallax_container"
          >
            <img src={image1} className="parallax_1" />
          </Parallax>
        </ParallaxBanner>
      </div>
    );
  }
}

export default Parallax_1;
