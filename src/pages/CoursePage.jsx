import React, { useEffect } from "react";
import TitleBar from "../components/TitleBar";
import "./index.css";
import API from "../assets/icons/api.png";
import { COLORS } from "../utils/Color";
import QAAutomation from "../assets/icons/computer.png";
import QAManual from "../assets/icons/testing.png";
import MovingText from "react-moving-text";
import OnlineEducationIcon from "../assets/icons/online-learning.png";
import Marquee from "react-fast-marquee";

function CoursePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    document.title = "TimeNTech | Courses";
  });

  const Card = ({ title, des, icon }) => {
    return (
      <div
        className="zoom"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          textAlign: "center",
          gap: "10px",
          borderStyle: "dashed",
          transition: "transform .2s",
        }}
      >
        <img
          src={icon}
          alt="TimeNTech"
          style={{ height: "90px", width: "90px", marginTop: "1rem" }}
        />
        <div
          style={{ fontSize: "20px", fontWeight: "bold", color: COLORS.main }}
        >
          {title}
        </div>
        <div style={{ fontSize: "16px", marginBottom: "1rem" }}>{des}</div>
      </div>
    );
  };

  const Card2 = ({ title, des, icon, bg }) => {
    return (
      <div
        className="zoom"
        style={{
          borderStyle: "solid",
          borderRadius: "10px",
          borderColor: COLORS.main,
          borderWidth: "3px",
          padding: "1rem",
          backgroundColor: bg,
          transition: "transform .2s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={icon}
            alt="TimeNTech"
            style={{ height: "70px", width: "70px" }}
          />
          <div
            style={{
              color: COLORS.main,
              fontWeight: "bold",
              marginLeft: "1rem",
            }}
          >
            {title}
          </div>
        </div>
        <p style={{ textAlign: "justify" }}>{des}</p>
      </div>
    );
  };

  const Card3 = ({ title, des, icon }) => {
    return (
      <div
        style={{
          borderStyle: "solid",
          borderRadius: "10px",
          borderColor: COLORS.main,
          borderWidth: "3px",
          padding: "1rem",
          backgroundColor: "#D7ECD9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={icon}
            alt="TimeNTech"
            style={{ height: "70px", width: "70px" }}
          />
          <div
            style={{
              color: "white",
              fontWeight: "bold",
              marginLeft: "1rem",
            }}
          >
            {title}
          </div>
        </div>
        <p style={{ textAlign: "justify", color: "white" }}>{des}</p>
      </div>
    );
  };

  return (
    <div>
      <div
        className="row"
        style={{
          backgroundColor: COLORS.main,
          padding: "1rem",
          color: "white",
          marginBottom: "1rem",
          marginTop: "1rem",
          fontWeight: "bold",
          fontSize: "28px",
        }}
      >
        <Marquee gradient={false} speed={40}>
          <MovingText
            type="flash"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="infinite"
            fillMode="none"
          >
            REGISTRATION IS GOING ON…
          </MovingText>
        </Marquee>
      </div>
      <TitleBar title={"Course Overview"} />
      <div className="row">
        <p style={{ fontSize: 18, textAlign: "justify" }}>
          Manual Testing is a type of Software Testing where Testers manually
          test the software application. Manual Testing is the most primitive of
          all testing types and helps find bugs in the software system. JIRA is
          an issue management tool and it helps to facilitate the testing
          process and to manage various types of issues in the software
          development process. Manual Testing does not require knowledge of any
          testing tool.
        </p>
        <p
          style={{
            fontSize: 18,
            textAlign: "justify",
            // "@media (max-width: 600px)": {
            //   marginLeft: "1rem",
            //   marginRight: "1rem",
            // },
          }}
        >
          Testing with SQL is also known as Database Testing. The data entered
          in the front end will be stored in the back-end database. The database
          may be Oracle, PostgreSQL, etc. The data will be organized in the
          tables as a record, and it is used to support the content of the page.
          Database or backend testing is important because if it is not done it
          has some serious complications like deadlock, data corruption, data
          loss, etc.
        </p>
        <p style={{ fontSize: 18, textAlign: "justify" }}>
          Application Programming Interface (API) enables communication and data
          exchange between two separate software systems an example is a front
          end and the backend database. API Testing is a software testing type
          that validates APIs. The purpose of API Testing is to check the
          functionality, reliability, performance, and security of the
          programming interfaces.
        </p>
        <p style={{ fontSize: 18, textAlign: "justify" }}>
          Automation Testing means using an automation tool to test the software
          application. On the contrary, Manual Testing is performed by a human
          sitting in front of a computer carefully executing the test steps.
          Selenium is an open-source automation tool that is currently most used
          all over the world and it supports various programming languages such
          as Java, Python, C#, Ruby, etc.
        </p>
      </div>
      <div
        className="row"
        style={{
          marginTop: "10rem",
          backgroundColor: "rgba(129, 129, 129, 0.2)",
          padding: "2rem",
        }}
      >
        <Card
          title="QA Manual"
          icon={QAManual}
          des={`
          Manual testing is performed prior to software release. Software testers use and review the developed software the way an end user would use it. The testing process can be a systematic process that uses formal test plans and action cases or can informally be performed by a user domain expert.`}
        />
        <Card
          title="QA Automation"
          icon={QAAutomation}
          des={`QA automation is essentially the process of automating the testing of software applications and mobile apps using automation tools. Primarily, QA automation tools perform repetitive (or manual) testing tasks that were previously performed by a human tester.`}
        />

        <Card
          title="Rest API Automation"
          icon={API}
          des={`Learn core JavaScript programming. Using JS we dive into testing APIs including how to automate various authentication methods. Learn the frameworks and tools demanded by the tech industry.`}
        />
      </div>
      <div className="row">
        <p
          style={{
            marginLeft: 0,
            color: COLORS.main,
            fontSize: "30px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Course Outline
        </p>
        <p>
          <b>Course Duration:</b> 6 months
        </p>
        <p>
          <b>Interview Guideline</b>
        </p>
        <p>
          <b>Job Placement Support</b>
        </p>
        <p>
          <b>Class Duration:</b> 3 hours per class
        </p>
        <p>
          <b>Weekly Classes:</b> 2
        </p>
        <p>
          <b>Course Details:</b>
        </p>
        <table
          class="table table-bordered"
          style={{ textTransform: "uppercase" }}
        >
          <thead>
            <tr>
              <th scope="col">Manual Testing</th>
              <th scope="col">Programming & Automation Testing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SDLC/STLC</td>
              <td>Core Java</td>
            </tr>
            <tr>
              <td>TEST PLAN/TEST CASE</td>
              <td>Linux</td>
            </tr>
            <tr>
              <td>Bug Life Cycle</td>
              <td>Selenium/Cucumber BDD</td>
            </tr>
            <tr>
              <td>Jira & Zephyr</td>
              <td>TESTNG & Maven</td>
            </tr>
            <tr>
              <td>Waterfall, Agile/Scrum</td>
              <td>Automation Framework Design</td>
            </tr>
            <tr>
              <td>QC/ALM</td>
              <td>Git/Github</td>
            </tr>
            <tr>
              <td>SQL</td>
              <td>CI/CD Jenkins</td>
            </tr>
            <tr>
              <td>Postman</td>
              <td>{`API Automation (RESTASSURED)`}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="row-left">
          <Card2
            icon={OnlineEducationIcon}
            bg="#D7ECD9"
            title={`Instructor
            Led Guidance`}
            des={`Our instructors are not only instructors but also active members of the workforce. They bring experience and knowledge that make a difference. We have and will continue to strive to bring the best out of our students.`}
          />
        </div>
        <div className="row-middle">
          <Card2
            icon={OnlineEducationIcon}
            bg="#F5D5CB"
            title={`Collaborative
            Learning Course`}
            des={`Whether in class or in a real job. We always learn best from our peers. We encourage and create opportunities for our students to engage in helping each other. Our students develop a lifelong bond and knowledge that helps them succeed in the classroom and in their careers knowing, they will always have people they can trust.`}
          />
        </div>
        <div className="row-right">
          <Card2
            icon={OnlineEducationIcon}
            bg="#D5D6EA"
            title={`Comprehensive
            Syllabus`}
            des={`We teach what is in demand. Our syllabus changes and adapts from time to time to what is required by the growing tech industry. We know your newly gained knowledge will be more than sufficient to land and maintain a successful career.`}
          />
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
