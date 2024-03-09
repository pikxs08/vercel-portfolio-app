import Header from "../components/Header";

function Welcome() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Hi, I am Pieter, welcome to my portfolio!</h1>
        <div className="content">
          <div className="section">
            <img
              src="static/pieter.jpg"
              alt="Pieter"
              width="200"
              height="200"
            />
            <p>
              I'm a passionate developer with a love for clean code and elegant
              solutions. Let me introduce myself.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        div {
          width: 400px;
          text-align: left;
        }
        .container {
          margin: 0 auto;
          max-width: 65ch;
          text-align: center;
          background: #f7fafc;
          color: #1a202c;
          font-family: "Inter", sans-serif;
          padding: 32px;
        }
        .content {
          gap: 32px;
        }
        .section {
          gap: 8px;
          text-align: center;
        }
        .subsection {
          gap: 2px;
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

        * {
          background: #f7fafc;
          color: #1a202c;
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </>
  );
}

export default Welcome;
