import React, { useEffect, useState } from "react";
import TitleBar from "../components/TitleBar";
import ContactIcon from "../assets/women.jpeg";
import { COLORS } from "../utils/Color";
import EmailIcon from "../assets/icons/email.png";
import LocIcon from "../assets/icons/location.png";
import PhoneIcon from "../assets/icons/phone.png";

const IconDetaisl = ({ icon, text, title }) => (
  <div
    style={{
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "1rem",
      flexDirection: "column",
      borderStyle: "dashed",
      padding: "1rem",
      // flexWrap: "wrap",
    }}
  >
    <img
      src={icon}
      alt="TimeNTech"
      style={{ height: "25px", width: "25px", marginRight: "1rem" }}
    />
    <p style={{ margin: "0", fontWeight: "bold", textAlign: "center" }}>
      {title}
    </p>
    <p style={{ margin: "0", fontSize: "12px", textAlign: "center" }}>{text}</p>
  </div>
);
function Contact() {
  const [name, setName] = useState("");
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "TimeNTech | Contact";
  });

  return (
    <div>
      <TitleBar title="Contact Us" />
      <div className="row">
        <div
          className="row-left"
          style={{
            flexDirection: "column",
            alignSelf: "flex-start",
          }}
        >
          <p style={{ fontSize: "36px", color: COLORS.main }}>Get In Touch</p>
          <p>We are here for you. How can we help ?</p>
          <img
            src={ContactIcon}
            alt="TimeNTech"
            style={{ height: "90%", width: "100%" }}
          />
          <div
            style={{
              flexDirection: "row",
              flex: 1,
              display: "flex",
            }}
          >
            <IconDetaisl
              icon={LocIcon}
              text="Queens, New York, USA"
              title="Address"
            />
            <IconDetaisl icon={PhoneIcon} text="929-257-1544" title="Call Us" />
            <IconDetaisl
              icon={EmailIcon}
              text="info@timentech.com"
              title="Email Us"
            />
          </div>
        </div>
        <div className="row-right">
          {/* <textarea
            className="form-input"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="form-input"
            placeholder="Enter your mobile"
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="form-input"
            placeholder="Enter your email"
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="form-input"
            placeholder="Go ahead, we are listenning..."
            rows={5}
            onChange={(e) => setName(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ThemeButton text="Send Message" />
          </div> */}

          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdp4j0_qhfbgCnqVZtv02fiDCx094f1Nzj5fmj7DBfjSVNMVA/viewform?embedded=true"
            width="100%"
            height="812"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
