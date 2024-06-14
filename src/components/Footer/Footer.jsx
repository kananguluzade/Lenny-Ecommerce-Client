import React from "react";
import logoImage from "src/assets/Logo.png";
import "./Footer.scss";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="footer-background">
        <div className="foot-container container">
          <div className="f-about">
            <div className="logo-content">
              <img src={logoImage} />
              <p>
                The biggest marketplace managed by <br /> Ideologist corp, which
                provides various kinds of daily needs and hobbies.
              </p>
            </div>

            <div className="foot-links-container">
              <ul className="f-links">
                <li className="link-directing">About Lenny</li>
                <li className="f-link">
                  <button
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Information
                  </button>
                </li>
                <li className="f-link">
                  <button
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Store Lactor
                  </button>
                </li>
                <li className="f-link">
                  <button
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Bulk Purchase
                  </button>
                </li>
                <li className="f-link">
                  <button
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Alteration Services
                  </button>
                </li>
                <li className="f-link">
                  <button
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Gift Delivery Service
                  </button>
                </li>
                <li className="f-link">
                  <button
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Live Station
                  </button>
                </li>
              </ul>

              <ul className="f-links">
                <li className="link-directing">About Lenny</li>
                <li className="f-link">
                  <button
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    FAQ
                  </button>
                </li>
                <li className="f-link">
                  <button
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Return Policy
                  </button>
                </li>
                <li className="f-link">
                  <button
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Privacy Policy
                  </button>
                </li>
                <li className="f-link">
                  <button
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Accessibillity
                  </button>
                </li>
                <li className="f-link">
                  <button
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Contact Us
                  </button>
                </li>
              </ul>

              <ul className="f-links">
                <li className="link-directing">Account</li>
                <li className="f-link">
                  <button
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Membership
                  </button>
                </li>
                <li className="f-link">
                  <button
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Address
                  </button>
                </li>
                <li className="f-link">
                  <button
                    onClick={() => {
                      scrollToTop();
                    }}
                  >
                    Cupons
                  </button>
                </li>
              </ul>

              <div className="contact">
                <ul className="contact-us">
                  <li className="link-directing">Contact Us</li>
                  <li className="list">
                    For Lenny Consumer Complaint Services
                  </li>
                  <li className="list">
                    (684) 555-0102 and curtis.weaver@example.com
                  </li>
                </ul>
                <ul className="service">
                  <li className="list">Customers Complaint Service</li>
                  <li className="list">
                    Directorate Generate of the Republic of Indonesia
                  </li>
                  <li className="list">(480) 555-0103</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <div className="copy-right-container container">
            <p>COPYRIGHT © LENNY CO., LTD. ALL RIGHTS RESERVED.</p>
            <div className="terms-privacy">
              <span>Terms of use</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
