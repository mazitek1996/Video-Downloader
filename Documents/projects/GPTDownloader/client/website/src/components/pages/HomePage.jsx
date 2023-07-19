import React from "react";
import Hero from "../homeComponents/Hero";
import Howitworks from "../homeComponents/How-it-works";
import SupportedServices from "../homeComponents/Supported_services";

function HomePage() {
  return (
    <div style={{ minHeight: "100vh" }} className="container">
      <Hero  />
      <Howitworks/>
      <SupportedServices/>
    </div>
  );
}

export default HomePage;
