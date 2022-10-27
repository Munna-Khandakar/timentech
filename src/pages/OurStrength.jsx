import React, { useEffect } from "react";
import ResumeBuilderIcon from "../assets/icons/resume.png";
import OnlineEducationIcon from "../assets/icons/online-learning.png";
import OnlineLearning from "../assets/class.jpeg";
import Learning from "../assets/men.jpeg";
import Connection from "../assets/job.jpeg";
import Job from "../assets/icons/job-seeker.png";
import Consultant from "../assets/icons/consultant.png";
import { COLORS } from "../utils/Color";
import "./index.css";
import TitleBar from "../components/TitleBar";

const OfferCard = ({ title, des, icon }) => {
  return (
    <div
      style={{
        borderColor: COLORS.main,
        transition: "transform .2s",
      }}
      className="OfferCard zoom"
    >
      <img
        src={icon}
        alt="TimeNTech"
        style={{ height: "90px", width: "90px" }}
      />
      <div style={{ fontSize: "20px", fontWeight: "bold", color: COLORS.main }}>
        {title}
      </div>
      <div style={{ fontSize: "20px" }}>{des}</div>
    </div>
  );
};

function OurStrength() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    document.title = "TimeNTech | Our Strength";
  });
  return (
    <div>
      <TitleBar title="What We Offer" />
      <div
        className="offerContainer"
        style={{
          padding: "20px",
          display: "flex",
          margin: 10,
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <OfferCard
          title="Professional IT Courses"
          icon={OnlineEducationIcon}
          des={`We provide interactive and demanding IT courses to students who do not
        have any prior IT experiences with flexible schedules on the weekday
        and weekends`}
        />
        <OfferCard
          title="Resume Build Up"
          icon={ResumeBuilderIcon}
          des={`Concise and comprehensive resume helps to catch the attention of employers and stand
          out from the crowd.`}
        />
        <OfferCard
          title="Job Assistance"
          icon={Job}
          des={`At the end of the course, we provide job assistance to the students which include
          bootcamp, interview preparation, introduction to the IT recruiters, and posting the
          resume on the job portal.`}
        />
        <OfferCard
          title="IT Consultancy"
          icon={Consultant}
          des={`Whether you are lost, need a help or want to have any discussion about your QA career
          let TimeNTech help you clearing your doubts.`}
        />
      </div>
      <div className="row">
        <div className="row-left" style={{ flexDirection: "column" }}>
          <div style={{ color: COLORS.main, fontSize: 36 }}>8 Benefits of</div>
          <div style={{ color: COLORS.main, fontSize: 36, fontWeight: "bold" }}>
            <b>Virtual Learning Classrooms</b>
          </div>
          <div
            style={{
              textAlign: "justify",
              marginTop: "2rem",
              fontSize: "20px",
            }}
          >
            One thing the pandemic has taught us is that our world is more
            connected than ever virtually. A huge shift of work is now fully
            online. The tech field has seen one of the most changes as many jobs
            available are fully remote. In order to best prepare our students,
            we have also adopted our platform online. We use the same
            communication and tech tools in everyday class that you would see
            and use in a real job. This familiarity is helpful to transition to
            a virtually connected employment.
          </div>
        </div>
        <div className="row-right">
          <img
            src={OnlineLearning}
            alt="TimeNTech"
            style={{
              height: "100%",
              width: "100%",
              boxShadow: "10px 10px 19px -1px rgba(48,100,161,0.75)",
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="row-left">
          <img
            src={Connection}
            alt="TimeNTech"
            style={{
              height: "100%",
              width: "100%",
              boxShadow: "10px 10px 19px -1px rgba(48,100,161,0.75)",
            }}
          />
        </div>
        <div className="row-right" style={{ flexDirection: "column" }}>
          <p style={{ color: COLORS.main, fontSize: 34, fontWeight: "bold" }}>
            Don't Just Land a Job
          </p>

          <div
            style={{
              textAlign: "justify",
              fontSize: "20px",
            }}
          >
            <p
              style={{
                margin: 0,
              }}
            >
              Workforce development programs offer the following types of job
              readiness services:
            </p>
            <p style={{ margin: 0 }}>
              Interview techniques, such as pointers for expressing your
              experience, availability, and technical skills to employers
            </p>
            <p style={{ margin: 0 }}>
              Technical training on how to effectively draft:
            </p>
            <p
              style={{
                margin: 0,
                borderLeft: `3px solid ${COLORS.main}`,
                paddingLeft: "1rem",
                marginBottom: "1px",
              }}
            >
              Resume (electronic)
            </p>
            <p
              style={{
                margin: 0,
                borderLeft: `3px solid ${COLORS.main}`,
                paddingLeft: "1rem",
                marginBottom: "1px",
              }}
            >
              References
            </p>
            <p
              style={{
                margin: 0,
                borderLeft: `3px solid ${COLORS.main}`,
                paddingLeft: "1rem",
                marginBottom: "1px",
              }}
            >
              Cover letter
            </p>
            <p
              style={{
                margin: 0,
                borderLeft: `3px solid ${COLORS.main}`,
                paddingLeft: "1rem",
                marginBottom: "1px",
              }}
            >
              Thank you letter
            </p>
          </div>
        </div>
      </div>
      <div className="strength-customer-container">
        <div className="row" style={{ marginBottom: "3rem" }}>
          <div className="row-left" style={{ flexDirection: "column" }}>
            <div
              style={{ color: COLORS.main, fontSize: 36, fontWeight: "bold" }}
            >
              <b>Career Changing Programs </b>
            </div>
            <div
              style={{
                textAlign: "justify",
                marginTop: "2rem",
                fontSize: "20px",
              }}
            >
              Our students come from all walks of life and they can attest that
              their experience was transformative. We teach so that everyone can
              grasp the information and succeed.
            </div>
          </div>
          <div className="row-right">
            <img
              src={Learning}
              alt="TimeNTech"
              style={{
                height: "100%",
                width: "100%",
                boxShadow: "10px 10px 19px -1px rgba(48,100,161,0.75)",
              }}
            />
          </div>
        </div>
        {/* <div className="row">
          <div className="row-left">
            <Card
              title="QA Automation"
              icon={QAAutomation}
              des={`
              Learn core JavaScript programming. The program then teaches you how to use JavaScript in conjunction with leading test automation frameworks such as selenium to learn industry standards in web UI automation and testing.`}
            />
          </div>
          <div className="row-right">
            <Card
              title="Rest API Automation"
              icon={API}
              des={`Learn core JavaScript programming. Using JS we dive into testing APIs including how to automate various authentication methods. Learn the frameworks and tools demanded by the tech industry.`}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default OurStrength;
