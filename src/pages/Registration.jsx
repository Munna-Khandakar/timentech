import React, { useEffect, useState } from "react";
import TitleBar from "../components/TitleBar";
import { COLORS } from "../utils/Color";
import ThemeButton from "../components/ThemeButton";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RegImg from "../assets/register.jpeg";

function Registration() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    document.title = "TimeNTech | Registration";
  });
  const [name, setName] = useState("");
  return (
    <div>
      <TitleBar title="Registration" />
      <p style={{ textAlign: "center" }}>
        Fillup the form and register yourself
      </p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfMGdRhAQET1IUdp8S0QyXzI5KnXC71x8emoGvGB7aAVA7Okw/viewform?embedded=true"
        width="100%"
        height="1816"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
      {/* <div
        className="row"
        style={{
          backgroundColor: COLORS.main,
          padding: "2rem",
          marginTop: "2rem",
        }}
      >
        <div className="row-left">
          <img src={RegImg} style={{ height: "100%", width: "100%" }} />
        </div>
        <div
          className="row-right"
          style={{
            flexDirection: "column",
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "10px",
          }}
        >
          <div className="input-row">
            <TextField
              required
              id="outlined-required"
              label="First Name"
              size="small"
              fullWidth
            />
            <TextField
              required
              id="outlined-required"
              label="Middle Name"
              size="small"
              fullWidth
            />

            <TextField
              required
              id="outlined-required"
              label="Last Name"
              size="small"
              fullWidth
            />
          </div>
          <div className="input-row">
            <TextField
              required
              id="outlined-required"
              label="Mobile Number"
              size="small"
              fullWidth
            />
            <TextField
              required
              id="outlined-required"
              label="Email Address"
              size="small"
              fullWidth
            />
          </div>
          <div className="input-row">
            <TextField
              required
              id="outlined-required"
              label="Street Address"
              size="small"
              fullWidth
            />
            <TextField
              required
              id="outlined-required"
              label="Country"
              size="small"
              fullWidth
            />
          </div>

          <div className="input-row">
            <TextField
              required
              id="outlined-required"
              label="State"
              size="small"
              fullWidth
            />
            <TextField
              required
              id="outlined-required"
              label="Zip Code"
              size="small"
              fullWidth
            />
          </div>
          <div className="input-row">
            <TextField
              required
              id="outlined-required"
              label="How did you hear about us"
              size="small"
              fullWidth
            />
          </div>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              * Courses you want to enroll
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="01"
                control={<Radio />}
                label="Software Testing with Selenium"
              />
            
            </RadioGroup>
          </FormControl>
          <div className="input-row">
            <TextField
              required
              id="outlined-required"
              label="Batch you want to enroll"
              size="small"
              fullWidth
            />
          </div>
          <div className="input-row">
            <TextField
              required
              id="outlined-required"
              label="Class Location"
              size="small"
              fullWidth
            />
          </div>
          <div className="input-row">
            <TextField
              id="outlined-required"
              label="Your Comment"
              size="small"
              fullWidth
              multiline
              rows={4}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ThemeButton text="Register" />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Registration;
