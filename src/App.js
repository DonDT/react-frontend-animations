import React from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured/Featured";
import VenueNfo from "./components/VenueNfo/index";
import HighLights from "./components/HighLights/index";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
import Footer from "./components/header_footer/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venueinfo">
        <VenueNfo />
      </Element>

      <Element name="highlights">
        <HighLights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
