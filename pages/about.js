import Link from "next/link";
import Header from "../components/Header";

export default function Component() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content">
          <div className="section">
            <h1>About Me</h1>
          </div>
          <div className="section">
            <p>
              I'm a passionate developer with a love for clean code and elegant
              solutions. Let me introduce myself.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="section">
            <h2>Education</h2>
            <div className="subsection">
              <h3>Bcom Finance Degree</h3>
              <p>
                Graduated from the University of Stellenbosch with a Bcom
                Finance in 2018. Majored in Investments and financial management
              </p>
            </div>
            <div className="subsection">
              <h3>Rondebosch High School</h3>
              <p>Got my matric from Rondebosch High School in 2015.</p>
            </div>
          </div>
          <div className="section">
            <h2>Work Experience</h2>
            <div className="subsection">
              <h3>Dev Project Manager</h3>
              <h5>WBWR - digital experiences - currently since Oct 2023</h5>
              <p>
                Leading a team of developers in creating a cutting-edge web
                application for a major e-commerce platform. Implemented agile
                methodologies to improve collaboration and project delivery.
              </p>
            </div>
            <div className="subsection">
              <h3>Chief Operations Officer</h3>
              <h5> The Wealth Room - 2019 - 2023</h5>
              <p>
                Managed the day-to-day operations of a financial services firm.
                Oversaw the implementation of new systems and processes to
                improve efficiency and customer satisfaction. Where I found my
                passion for Tech.
              </p>
            </div>
          </div>
          <div className="section">
            <h2>Skills & Interests</h2>
            <p>
              In my free time, I enjoy contributing to open-source projects and
              experimenting with new technologies. I'm particularly interested
              in frontend frameworks such as React and Drawing. My goal is to
              create user-friendly interfaces that make the web a more enjoyable
              place for everyone.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        div {
          width: 100%;
          text-align: left;
        }
        .container {
          margin: 0 auto;
          max-width: 65ch;
          display: grid;
          text-align: center;
          background: #f7fafc;
          color: #1a202c;
          font-family: "Inter", sans-serif;
          padding: 32px;
        }
        .content {
          display: grid;
        }
        .section {
          display: grid;
          gap: 1rem;
        }
        .subsection {
          display: grid;
        }
        h1 {
          font-size: 2rem;
          font-weight: bold;
          letter-spacing: -0.025em;
        }
        h2 {
          font-size: 1.5rem;
          font-weight: bold;
        }
        h3 {
          font-size: 1.25rem;
          font-weight: bold;
        }
        p {
          color: #718096;
          font-size: 0.875rem;
        }
        body {
          background: #f7fafc;
          color: #1a202c;
          font-family: "Inter", sans-serif;
        }

        .header {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          justify-content: center;
          margin: 1rem auto;
          background-color: #333;
          border-radius: 50px;
          width: 400px;
          font-family: "Inter", sans-serif;
        }

        .header p {
          color: white;
          background-color: #333;
          border-radius: 50px;
          transition: background-color 0.3s ease;
          padding: 0.5rem 1rem;
          text-decoration: none;
          text-decoration-style: none;
        }

        .header p:hover {
          cursor: pointer;
          background-color: #777;
          color: #fff;
          text-decoration: none;
          text-decoration-style: none;
        }

        * {
          background: #f7fafc;
          color: #1a202c;
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </>
  );
}
