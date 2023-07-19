import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
function Howitworks() {
  return (
   <section id="how-it-works">
     <div>
      <div className="container mb-4">
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">
              How to download Videos on GPTDownloader
            </h1>
            <p className="col-md-8 fs-4">
              Our website makes it easy for you to download videos from various
              platforms
            </p>
            <p className="col-md-8 fs-4">
              Our website makes it easy for you to download videos from various
              platforms{" "}
              <FontAwesomeIcon
                icon={faArrowAltCircleDown}
                style={{ color: "blue" }}
              />{" "}
            </p>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-bg-dark rounded-3">
              <h2>Copy the Video Link</h2>
              <p>
                {" "}
                Find the video you want to download on the supported platform
                (e.g., YouTube, Facebook,Twitter, Vimeo). Copy the link to the
                video from the address bar of your browser.
              </p>
              <button className="btn btn-outline-light" type="button">
                There you go{" "}
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  style={{ marginLeft: "10px" }}
                />
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
              <h2>Paste the Link</h2>
              <p>
                Come back to our website and paste the copied link into the
                provided input field. Make sure to double-check the link for
                accuracy.
              </p>
              <button className="btn btn-outline-secondary" type="button">
                Hit the "Download"
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  );
}

export default Howitworks;
