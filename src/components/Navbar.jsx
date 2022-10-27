import React, { useState } from "react";
import "./index.css";
import Logo from "../assets/Flyer.jpeg";
import FacebookIcon from "../assets/icons/white/facebook.png";
import LinkedInIcon from "../assets/icons/white/linkedin.png";
import TwitterIcon from "../assets/icons/white/twitter.png";
import YoutubeIcon from "../assets/icons/white/youtube.png";
import { Link } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import MenuIcon from "../assets/icons/menu.png";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (link) => {
    setAnchorEl(null);
    navigate(link);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = (link) => {
    setAnchorEl2(null);
    navigate(link);
  };

  const login = () => {
    navigate("/login");
    setAnchorEl(null);
    setAnchorEl2(null);
  };
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#132c5b", justifyContent: "space-between" }}
    >
      <div className="nav-container">
        <div>
          <img
            src={Logo}
            alt="TimeNTech"
            onClick={() => navigate("/")}
            className="nav-logo-img"
          />
        </div>
        <div className="nav-left-container">
          <div className="nav-link-container">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" onClick={handleClick}>
                  Courses & Registration ▾
                </Link>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={() => handleClose("/courses")}>
                    Courses
                  </MenuItem>
                  <MenuItem onClick={() => handleClose("/registration")}>
                    Registration
                  </MenuItem>
                </Menu>
              </li>
              <li>
                <Link className="link" to="/our-strength">
                  Our Strength
                </Link>
              </li>
              <li>
                <Link className="link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to="/contact">
                  Contact
                </Link>
              </li>

              <li>
                {currentUser && (
                  <Link className="link" to="/exercise">
                    Exercise
                  </Link>
                )}
              </li>
            </ul>
            {currentUser ? (
              <ThemeButton text="LOGOUT" handleClick={logout} />
            ) : (
              <ThemeButton text="SIGNUP/LOGIN" handleClick={login} />
            )}
          </div>
          <div>
            <div className="nav-link-icons">
              <img
                src={FacebookIcon}
                alt="TimeNTech"
                onClick={() =>
                  window.open("https://www.facebook.com/", "_blank")
                }
                className="nav-logo-icon"
              />
              <img
                src={TwitterIcon}
                alt="TimeNTech"
                onClick={() =>
                  window.open("https://www.twitter.com/", "_blank")
                }
                className="nav-logo-icon"
              />
              <img
                src={LinkedInIcon}
                alt="TimeNTech"
                onClick={() =>
                  window.open("https://www.linkedin.com/", "_blank")
                }
                className="nav-logo-icon"
              />
              <img
                src={YoutubeIcon}
                alt="TimeNTech"
                onClick={() =>
                  window.open("https://www.youtube.com/", "_blank")
                }
                className="nav-logo-icon"
              />
            </div>
            <p
              style={{
                color: "white",
                alignSelf: "center",
                marginLeft: "1rem",
              }}
            >
              {currentUser?.email}
            </p>
          </div>
        </div>
        <div className="nav-hamburgur-menu" onClick={handleClick2}>
          <img
            src={MenuIcon}
            alt="TimeNTech"
            style={{ height: "30px", width: "30px" }}
          />
        </div>

        <Menu
          id="basic-men"
          anchorEl={anchorEl2}
          open={open2}
          onClose={handleClose2}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => handleClose2("/")}>Home</MenuItem>
          <MenuItem onClick={() => handleClose2("/courses")}>Courses</MenuItem>
          <MenuItem onClick={() => handleClose2("/registration")}>
            Registration
          </MenuItem>
          <MenuItem onClick={() => handleClose2("/our-strength")}>
            Our Strength
          </MenuItem>
          <MenuItem onClick={() => handleClose2("/about")}>About Us</MenuItem>
          <MenuItem onClick={() => handleClose2("/contact")}>Contact</MenuItem>
          {currentUser && (
            <MenuItem onClick={() => handleClose2("/exercise")}>
              Exercise
            </MenuItem>
          )}

          {currentUser ? (
            <MenuItem onClick={logout}>Logout</MenuItem>
          ) : (
            <MenuItem onClick={login}>Login/Signup</MenuItem>
          )}
        </Menu>
      </div>
    </AppBar>
  );
}
const styles = {};
export default Navbar;
