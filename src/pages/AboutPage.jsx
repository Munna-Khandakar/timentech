import React, { useEffect } from "react";
import TitleBar from "../components/TitleBar";
import { COLORS } from "../utils/Color";

function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "TimeNTech | About ";
  });

  return (
    <div>
      <TitleBar title="About US" />
      <div
        className="row"
        style={{ display: "flex", alignItems: "flex-start" }}
      >
        <p style={{ textAlign: "justify" }}>
          <span style={{ fontWeight: "bold", color: COLORS.main }}>
            TimeNTech
          </span>{" "}
          was founded in June 2022 with the inspiration to help the Bangladeshi
          and other diverse communities. As an immigrant from Bangladesh, we all
          come to the USA with great hope but not all of us got the proper
          guidance and opportunities to be successful.
        </p>
        <p style={{ textAlign: "justify" }}>
          There is a tremendous need for skilled IT professionals in the USA job
          market in different platforms such as Technology, Health Insurance,
          Retail, you name it; everywhere you need skilled and trained workers.
          But due to the lack of skills in IT, a big number of people from our
          communities are deprived to grab those opportunities and ended up
          working in odd jobs.
        </p>

        <p style={{ textAlign: "justify" }}>
          The goal of our company is to help those people who would like to
          pursue their career in IT industries. Software QA (Quality Assurance)
          is such a field where it is not required to have a Bachelors' Degree
          in IT/Computer Science. Btu we do recommend to have Bachelors' Degree
          which adds the value in academic skill. People from a different
          discipline are also capable to foresee their career in the Software
          Testing field as long as they have the rights skills set to perform
          the job.
        </p>
        <p style={{ textAlign: "justify" }}>
          Software QA/Testing has become an integral part of the software life
          cycle. Every day there is new software is being created, enhanced, and
          upgraded, and there will be the same cycle in the future too. Software
          testing helps to identify errors, gaps, or missing requirements
          contrary to the actual requirements.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
