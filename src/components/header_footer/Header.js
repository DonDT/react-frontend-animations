import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";
import { FaAsymmetrik, FaArtstation } from "react-icons/fa";
import "./Header.css";
//import { display } from "@material-ui/system";

class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: false
  };

  toggleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  // if we would be routing to another page, use componentWillUnmount to remove ////the event listener.
  handleScroll = () => {
    if (window.scrollY > 1) {
      this.setState({ headerShow: true });
    } else {
      this.setState({ headerShow: false });
    }
  };

  render() {
    return (
      //<div style={{ position: "relative" }}>
      <div>
        {/* <AppBar
          position="fixed"
          style={{
            backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent",
            transition: this.state.headerShow ? "0.8s" : 0,
            boxShadow: "none",
            padding: "10px 0px",
            height: this.state.headerShow ? 55 : 86,
            marginTop: this.state.headerShow ? 10 : 0,
            opacity: this.state.headerShow ? 0.7 : 1
          }}
        >
          <ToolBar>
            <div
              className="header_logo"
              style={{
                display: this.state.headerShow ? "none" : "inline-block"
              }}
            >
              <div className="font-righteous header_logo_venue">
                The Venue By Floricel
              </div>
              <div className="header_logo_title">Musical Events</div>
            </div>

            <IconButton
              aria-label="Menu"
              color="inherit"
              onClick={() => this.toggleDrawer(true)}
              style={{ display: "flex" }}
            >
              <MenuIcon style={{ paddingBottom: 17 }} />
            </IconButton>
            <div
              style={{
                display: this.state.headerShow ? "inline-block" : "none",
                //margin: "0 auto",
                position: "absolute",
                top: "10px",
                left: "45%",
                fontFamily: "Open Sans Condensed"

                //transform: "translate(-50 %, -50 %)"
              }}
            >
              Come Celebrate with me{" "}
            </div>
            <SideDrawer
              open={this.state.drawerOpen}
              onClose={value => this.toggleDrawer(value)}
            />
          </ToolBar>
        </AppBar> */}
        <div className="wrapperDiv">
          <div className="container_div">
            <div style={{ display: "flex" }}>
              <h4>The Venue By Floricel</h4>
              <div className="stationIcon">
                <FaArtstation />
                {/* <ul class="menu">
                  <li>
                    <a href="#">Parent Link</a>

                    <ul>
                      <li>
                        <a href="#">Child Link</a>
                      </li>
                      <li>
                        <a href="#">Child Link</a>
                      </li>
                      <li>
                        <a href="#">Child Link</a>
                      </li>
                      <li>
                        <a href="#">Child Link</a>
                      </li>
                    </ul>
                  </li>
                </ul> */}
              </div>
            </div>
            <ul>
              <li>
                <a href="#">
                  <FaAsymmetrik className="asymmetricIcon" />{" "}
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
