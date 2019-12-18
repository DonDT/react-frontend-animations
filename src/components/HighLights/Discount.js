import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
//import { Button } from "@material-ui/core";
import MyButton from "../utils/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };
  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };
  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase Tickets Before 20th June 2020</h3>
              <p>
                {" "}
                Hey everyone, It is recommended to get the tickets early, to
                ensure that your place is reserved. This would allow our team to
                know exactly how many people would come and how to make
                arrangemants to accomodate everyone. Much Love! Viorica
              </p>
              <MyButton
                text="Purchase Tickets"
                bck="#ffa800"
                color="#ffffff"
                link=""
              />{" "}
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
