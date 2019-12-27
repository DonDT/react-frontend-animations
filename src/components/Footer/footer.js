import React, { Component } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaHandPointRight
} from "react-icons/fa";
import "./footer_style.css";

class Footer extends Component {
  render() {
    return (
      <div className="main_container">
        <div className="footer_container">
          <div className="first_list">
            <h4>Loving</h4>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <ul>
                <li>Lets Go</li>
                <li>Gives Away</li>
                <li>Does no Hord</li>
                <li>Frees, allows</li>
                <li>Judges not</li>
                <li>Opens to receive</li>
                <li>Is life</li>
                <li>Mental health</li>
                <li>Spiritual Health</li>
                <li>Great Sex</li>
                <li>Harmonious</li>
                <li>Kind and Caring</li>
              </ul>
              <div className="right_border"></div>
            </div>
          </div>
          <div className="second_list">
            <h4>Feeling</h4>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <ul>
                <li>Compassionate</li>
                <li>Understanding</li>
                <li>Empathetic</li>
                <li>Sensitivity</li>
                <li>Resonance</li>
                <li>Sensuality</li>
                <li>Intuition</li>
                <li>Gut instinct</li>
                <li>Beyond mental</li>
                <li>The Juice of Life</li>
                <li>Strength</li>
                <li>Resilience</li>
              </ul>
              <div className="right_border"></div>
            </div>
          </div>
          <div className="third_list">
            <h4>Giving</h4>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <ul>
                <li>Genrosity</li>
                <li>Receiving</li>
                <li>There is More</li>
                <li>Serving</li>
                <li>Being of Service</li>
                <li>Volunteering</li>
                <li>Electrifying</li>
                <li>Letting Go</li>
                <li>Growth</li>
                <li>One Esssence of Life</li>
                <li>Like the sun</li>
                <li>Like Mother Earth</li>
              </ul>
              <div className="right_border"></div>
            </div>
          </div>
          <div className="fourth_list">
            <h4>Jazz/ Blues/ Classical</h4>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <ul>
                <li>Miles Davis</li>
                <li>Louis Armstrong</li>
                <li>Frank Sinatra</li>
                <li>Ray Charles</li>
                <li>Nat Cole King</li>
                <li>Aretha Franklin</li>
                <li>Sam Cooke</li>
                <li>Jackie Wilson</li>
                <li>Billy Holiday</li>
                <li>Bethoven</li>
                <li>Elvis Presley</li>
                <li>Motzart</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footerIcons">
          <div>
            <FaHandPointRight className="pointingHand" />
            <FaFacebook className="facebookIcon" />
            <FaInstagram className="instagramIcon" />
            <FaLinkedin className="linkedInIcon" />
          </div>
        </div>
        <div className="giticonDiv">
          <FaGithub className="gitIcon" />
        </div>
        <div className="Subscription">
          <p>Subscribe below</p>
        </div>
        <div className="formdiv">
          <form className="form">
            <h5>Email :</h5>
            <input
              type="text"
              className="text-Input"
              placeholder="Floricel@email.com"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Footer;
