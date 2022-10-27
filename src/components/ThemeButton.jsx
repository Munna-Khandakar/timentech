import React from "react";

function ThemeButton({ text, handleClick }) {
  return (
    <div className="theme-button" onClick={handleClick}>
      <div className="theme-button-style">{text}</div>
    </div>
  );
}

export default ThemeButton;
