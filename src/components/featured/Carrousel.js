import React from "react";
import Slider from "react-slick";
//import slide_one from "../../resources/images/slide_one.jpg";
//import slide_two from "../../resources/images/slide_two.jpg";
//import slide_three from "../../resources/images/slide_three.jpg";

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px `,
        overflow: "hidden "
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image car1"
            styel={{
              height: `${window.innerHeight}px`
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image car2"
            styel={{
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div style={{ display: "grid", height: "100%" }}>
          <div
            className="carrousel_image car3"
            styel={{
              height: `${window.innerHeight}px`
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
