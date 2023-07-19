import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy
} from "@fortawesome/free-regular-svg-icons";
import "./Hero.css";
import WebImage from "../../assets/images/khatoon-new.png";
function Hero() {
  const [socialMedia, setSocialMedia] = useState("Facebook");
  const rotatingTexts = ["YouTube", "Vimeo", "Twitter"];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * rotatingTexts.length);
      setSocialMedia(rotatingTexts[randomIndex]);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [rotatingTexts]);
  return (
   <section id="home">
     <div className="hero_root">
      <div className="row hero_container mb-3">
        <div className="col-lg-6 col-md-6 hero_left">
          <div className="hero_left_container">
            <div className="text_container">
              <h1>GPTDonwloader</h1>
              <h3>
                Experience the ultimate online video downloading and audio
                conversion tool
              </h3>
            </div>

            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your link"
                />
              </div>
              <div className="hero_button_container">
                <button type="submit" className=" button b ">
                  Download
                </button>
                <button className="button">Paste <FontAwesomeIcon icon={faCopy} style={{marginLeft: "10px", color: "snow"}}/></button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 hero_right">
          <div className="image_container">
            <img src={WebImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="hero_down_text mb-4">
        <span>
          <h1>
            Download <h1>{socialMedia}</h1> videos directly using the
            GPTDownload website
          </h1>
          <h1>Enjoy the freedom of 100% free downloads</h1>
        </span>
      </div>
    </div>
   </section>
  );
}

export default Hero;
