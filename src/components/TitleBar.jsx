import React from "react";
import MousePic from "../assets/mouse.png";
import { COLORS } from "../utils/Color";
function TitleBar({ title }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontSize: 36,
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "10px",
          color: COLORS.main,
        }}
      >
        {title}
      </div>
      <img src={MousePic} alt="TimeNTech" style={{ height: 36, width: 36 }} />
    </div>
  );
}

export default TitleBar;
