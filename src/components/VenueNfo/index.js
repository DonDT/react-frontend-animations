import React from "react";
//import icon_calender from "../../resources/images/icons/calender.png";
//import icon_location from "../../resources/images/icons/location.png";
import Zoom from "react-reveal/Zoom";

const VenueNfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"> </div>

                  <div
                    className="vn_icon firstCalender"
                    // style={{
                    //   background: url(`${icon_calender}`)
                    // }}
                  />
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">7 August 2019 @10:00 pm</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"> </div>

                  <div
                    className="vn_icon locationIcon"
                    // style={{
                    //   background: url(`${icon_calender}`)
                    // }}
                  />
                  <div className="vn_title">Event Location</div>
                  <div className="vn_desc">Kaisaniemi Helsinki Square</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueNfo;
