import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3>About Us</h3>
            <p>GPTDownloader is a reliable and user-friendly online video downloader and converter. Our mission is to provide a seamless experience for users to download videos and convert them into various formats.</p>
          </div>
          <div className="col-lg-3">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-use">Terms of Use</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h3>Contact Us</h3>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> 134 Fremont St, San Francisco, CA 94105, USA
</li>
              <li><i className="fas fa-phone"></i> +1234567890</li>
              <li><i className="fas fa-envelope"></i> info@GPTDonwloader.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>&copy; {new Date().getFullYear()} GPTDownloader. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
