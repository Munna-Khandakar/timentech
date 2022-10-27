import React from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../utils/Color";
import FacebookIcon from "../assets/icons/white/facebook.png";
import LinkedInIcon from "../assets/icons/white/linkedin.png";
import TwitterIcon from "../assets/icons/white/twitter.png";
import YoutubeIcon from "../assets/icons/white/youtube.png";
function Footer() {
  return (
    <div
      className="footer-container"
      style={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <div
        className="row"
        style={{
          alignItems: "flex-start",
          maxWidth: "1170px",
          margin: "0 auto",
        }}
      >
        <div className="row-footer">
          <h4 style={{ color: "white", padding: 0, margin: 0 }}>Quick Links</h4>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              margin: 0,
            }}
          >
            <li>
              <Link className="link-footer" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link-footer" to="/our-strength">
                Our Strength
              </Link>
            </li>
            <li>
              <Link className="link-footer" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link-footer" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="row-footer">
          <h4 style={{ color: "white", padding: 0, margin: 0 }}>
            Registration
          </h4>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              margin: 0,
            }}
          >
            <li>
              <Link className="link-footer" to="/courses">
                Courses
              </Link>
            </li>
            <li>
              <Link className="link-footer" to="/registration">
                Registration
              </Link>
            </li>
          </ul>
        </div>
        <div className="row-footer" style={{ alignItems: "center" }}>
          <h4
            style={{
              color: "white",
              padding: 0,
              margin: 0,
              marginBottom: "2px",
            }}
          >
            Get In Touch
          </h4>
          <p style={{ fontSize: 15, margin: 0, padding: 0 }}>929-257-1544</p>
          <p style={{ fontSize: 15, margin: 0, padding: 0 }}>
            info@timentech.com
          </p>
          <div className="nav-link-icons" style={{ marginTop: "1rem" }}>
            <img
              src={FacebookIcon}
              alt="TimeNTech"
              onClick={() => window.open("https://www.facebook.com/", "_blank")}
              className="footer-logo-icon"
            />
            <img
              src={TwitterIcon}
              alt="TimeNTech"
              onClick={() => window.open("https://www.twitter.com/", "_blank")}
              className="footer-logo-icon"
            />
            <img
              src={LinkedInIcon}
              alt="TimeNTech"
              onClick={() => window.open("https://www.linkedin.com/", "_blank")}
              className="footer-logo-icon"
            />
            <img
              src={YoutubeIcon}
              alt="TimeNTech"
              onClick={() => window.open("https://www.youtube.com/", "_blank")}
              className="footer-logo-icon"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          borderBottomColor: "white",
          borderBottomStyle: "solid",
          margin: "1rem 2rem",
        }}
      />
      <div
        className="row"
        style={{
          alignItems: "flex-start",
          margin: 0,
        }}
      >
        <div className="row-footer" style={{ alignItems: "center" }}>
          <h4 style={{ color: "white", padding: 0, margin: 0 }}>Address</h4>
          <p style={{ fontSize: 15, margin: 0, padding: 0 }}>
            Queens, New York, USA
          </p>
          <p
            style={{
              fontSize: 12,
              color: "white",
              padding: 0,
              marginTop: "1rem",
            }}
          >
            Copyright © 2022 TimeNTech.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
