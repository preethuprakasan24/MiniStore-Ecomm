import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="container-fluid " style={{ backgroundColor: "#f2f2f2" }}>
        <div className="row">
          <div className="col-md-6">
            <div className="banner-content p-5">
              <h3>10% off</h3>
              <h1 className="display-2 text-uppercase text-dark pb-5 mt-5">
                NEW YEAR<br></br> SALE.
              </h1>
              <a
                href={process.env.PUBLIC_URL + "/banner-image.png"}
                className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
              >
                Shop Product
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-holder ">
              <img
                src={process.env.PUBLIC_URL + "/single-image1.png"}
                alt="banner"
                className="img-fluid"
                style={{ height: "500px", width: "1800px" }}
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <div class="container">
        <div class="row">
          <div class="footer-top-area">
            <div class="row d-flex flex-wrap justify-content-between">
              <div class="col-lg-3 col-sm-6 pb-3">
                <div class="footer-menu">
                  <img src={process.env.PUBLIC_URL + "/main-logo.png"} />
                  <p>
                    Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit
                    hendrerit. Gravida massa volutpat aenean odio erat nullam
                    fringilla.
                  </p>
                  <div class="social-links">
                    <ul class="d-flex list-unstyled">
                      {/* <li>
                        <a href="#">
                          <svg class="facebook">
                            <use xlink:href="#facebook"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg class="instagram">
                            <use xlink:href="#instagram"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg class="twitter">
                            <use xlink:href="#twitter"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg class="linkedin">
                            <use xlink:href="#linkedin"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg class="youtube">
                            <use xlink:href="#youtube"></use>
                          </svg>
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-6 pb-3">
                <div class="footer-menu text-uppercase">
                  <h5 class="widget-title pb-2">Quick Links</h5>
                  <ul class="menu-list list-unstyled text-uppercase">
                    <li class="menu-item pb-2">
                      <a href="#">Home</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a href="#">About</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a href="#">Shop</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a href="#">Blogs</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 pb-3">
                <div class="footer-menu text-uppercase">
                  <h5 class="widget-title pb-2">Help &amp; Info Help</h5>
                  <ul class="menu-list list-unstyled">
                    <li class="menu-item pb-2">
                      <a href="#">Track Your Order</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a href="#">Returns Policies</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a href="#">Shipping + Delivery</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a href="#">Contact Us</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a href="#">Faqs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 pb-3">
                <div class="footer-menu contact-item">
                  <h5 class="widget-title text-uppercase pb-2">Contact Us</h5>
                  <p>
                    Do you have any queries or suggestions?
                    <a href="mailto:">info@gmail.com</a>
                  </p>
                  <p>
                    If you need support? Just give us a call.
                    <a href="">+55 111 222 333 44</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
