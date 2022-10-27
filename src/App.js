import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import AboutPage from "./pages/AboutPage";
import OurStrength from "./pages/OurStrength";
import Registration from "./pages/Registration";
import Navbar from "./components/Navbar";
import ThemeButton from "./components/ThemeButton";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ExercisePage from "./pages/ExercisePage";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const customId = "custom-id-yes";
  const notify = (text) =>
    toast.error(text, {
      toastId: customId,
    });

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="app">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/courses" element={<CoursePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/our-strength" element={<OurStrength />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route
              exact
              path="/exercise"
              element={<ExercisePage notify={notify} />}
            />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
