import React, { useEffect } from "react";
import Banner from "../components/Banner";
import TitleBar from "../components/TitleBar";

function HomePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "TimeNTech | Home";
  });

  return (
    <div>
      <Banner />
      <TitleBar title={"Who We Are"} />
      <div className="row" style={{ marginTop: "2rem" }}>
        <p style={{ textAlign: "justify" }}>
          We have a proven track record in delivering professional, and
          high-quality courses in the areas of Software Quality Assurance which
          we are able to customize to the customer-specific requirements, time
          frames, and financial needs.
        </p>
        <p style={{ textAlign: "justify" }}>
          We are agile and always adopt the latest technology that is in high
          demand in the current IT world. We ensure the quality of all our
          training interventions by standardizing course materials, reviewing
          with the industry experts, and making them relevant to upcoming
          technologies.
        </p>
        <p style={{ textAlign: "justify" }}>
          Our instructors are experts in their respective fields and experienced
          professionals. Our ultimate goal is to provide excellent training to
          the candidates and prepare them for the future job market in the IT
          industry. Our key focuses include client care, respect for their
          professional values, and necessities.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
