import React from 'react';
import image1 from '../../assets/images/dailymotion-video-downloader.png.webp';
import image2 from '../../assets/images/facebook-video-downloader.png.webp';
import image3 from '../../assets/images/Twitter-video-downloader-1.png.webp';
import image4 from '../../assets/images/vimeo-video-downloader.png.webp';
import image5 from '../../assets/images/youtube-video-downloader-1.png.webp';

const CarousalImage = {
  image1,
  image2,
  image3,
  image4,
  image5,
};

function SupportedServices() {
  return (
    <section id='supported-platform'>
      <div className="container">
        <div className="support_header mb-4">
          <h2>
            We support a wide range of popular social media platforms and websites, making it easy for you to download content from your favorite sources
          </h2>
        </div>
        <div className="support_carousal card mb-4 " >
         <div className="card-body">
         <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={CarousalImage.image1} className="d-block " alt="..." />
              </div>
              <div className="carousel-item">
                <img src={CarousalImage.image2} className="d-block " alt="..." />
              </div>
              <div className="carousel-item">
                <img src={CarousalImage.image3} className="d-block " alt="..." />
              </div>
              <div className="carousel-item">
                <img src={CarousalImage.image4} className="d-block " alt="..." />
              </div>
              <div className="carousel-item">
                <img src={CarousalImage.image5} className="d-block " alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
         </div>
        </div>
      </div>
    </section>
  );
}

export default SupportedServices;
