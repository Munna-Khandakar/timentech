import React, { useEffect } from "react";
import Checkboxes from "../components/Checkboxes";
import ContainedButtons from "../components/ContainedButtons";
import CountrySelect from "../components/CountrySelect";
import DiscreteSlider from "../components/DiscreteSlider";
import EnhancedTable from "../components/EnhancedTable";
import InputAdornments from "../components/InputAdornments";
import MenuPopupState from "../components/BasicMenu";
import RadioGroupRating from "../components/RadioGroupRating";
import RowRadioButtonsGroup from "../components/RawRadioButton";
import SelectOtherProps from "../components/SelectOtherProps";
import SimpleDialogDemo from "../components/SimpleDialogDemo";
import TemporaryDrawer from "../components/TemporaryDrawer";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import TitleBar from "../components/TitleBar";

function ExercisePage({ notify }) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    document.title = "TimeNTech | Exercise";
  });
  return (
    <div>
      <TitleBar title={`user id: ${currentUser?.uid}`} />
      <div className="row">
        <div className="row-left" style={{ flexDirection: "column" }}>
          <p>Drop Down List of country list</p>
          <CountrySelect />
          <h4 style={{ marginTop: "1rem", marginBottom: 0 }}>
            Contained button
          </h4>
          <p style={{ marginBottom: "1rem" }}>
            Contained buttons are high-emphasis, distinguished by their use of
            elevation and fill. They contain actions that are primary to your
            app.
          </p>
          <ContainedButtons />
          {/* ----- */}
          <h4 style={{ marginTop: "1rem", marginBottom: 0 }}>Checkbox</h4>
          <p style={{ marginBottom: "1rem" }}>
            Checkboxes allow the user to select one or more items from a set.
          </p>
          <Checkboxes />
          {/* ----- */}
          <h4 style={{ marginTop: "1rem", marginBottom: 0 }}>Radio button</h4>
          <p style={{ marginBottom: "1rem" }}>
            Radio buttons allow the user to select one option from a set.
          </p>
          <RowRadioButtonsGroup />
          {/* ----- */}
          <h4 style={{ marginTop: "1rem", marginBottom: 0 }}>Rating</h4>
          <p style={{ marginBottom: "1rem" }}>
            Ratings provide insight regarding others' opinions and experiences,
            and can allow the user to submit a rating of their own.
          </p>
          <RadioGroupRating />
          {/* ----- */}
          <h4 style={{ marginTop: "1rem", marginBottom: 0 }}>Select</h4>
          <p style={{ marginBottom: "1rem" }}>
            Select components are used for collecting user provided information
            from a list of options.
          </p>
          <SelectOtherProps />
          {/* ----- */}
          <h4 style={{ marginTop: "1rem", marginBottom: 0 }}>Slider</h4>
          <p style={{ marginBottom: "1rem" }}>
            Sliders allow users to make selections from a range of values.
          </p>
          <DiscreteSlider />
          {/* ----- */}
          <h4 style={{ marginTop: "1rem", marginBottom: 0 }}>Text Field</h4>
          <p style={{ marginBottom: "1rem" }}>
            Text fields let users enter and edit text.
          </p>
          <InputAdornments />
          {/* ----- */}
          <h4 style={{ marginTop: "1rem", marginBottom: 0 }}>Table</h4>
          <p style={{ marginBottom: "1rem" }}>
            Tables display sets of data. They can be fully customized.
          </p>
          <EnhancedTable />
          {/* ----- */}
          <h4 style={{ marginTop: "1rem", marginBottom: 0 }}>Dialog</h4>
          <p style={{ marginBottom: "1rem" }}>
            Dialogs inform users about a task and can contain critical
            information, require decisions, or involve multiple tasks.
          </p>
          <SimpleDialogDemo />
          {/* ----- */}
          <h4 style={{ marginTop: "1rem", marginBottom: 0 }}>Drawer</h4>
          <p style={{ marginBottom: "1rem" }}>
            Navigation drawers provide access to destinations in your app. Side
            sheets are surfaces containing supplementary content that are
            anchored to the left or right edge of the screen.
          </p>
          <TemporaryDrawer />
          {/* ----- */}
          <h4 style={{ marginTop: "1rem", marginBottom: 0 }}>Links</h4>
          <p style={{ marginBottom: "1rem" }}>
            The Link component allows you to easily customize anchor elements
            with your theme colors and typography styles.
          </p>
          <a target="_blank" href="https://google.com/">
            link
          </a>
          {/* ----- */}
          <h4 style={{ marginTop: "1rem", marginBottom: 0 }}>Menu</h4>
          <p style={{ marginBottom: "1rem" }}>
            Menus display a list of choices on temporary surfaces.
          </p>
          <MenuPopupState />
        </div>
      </div>
    </div>
  );
}

export default ExercisePage;
