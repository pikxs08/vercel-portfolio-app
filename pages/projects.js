import Link from "next/link";
import Header from "../components/Header";

export default function Projects() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>My Projects</h1>
        <div className="project">
          <h2>Itunes Search API - Capstone Project</h2>
          <p>
            This is my previous capstone project deployed on Heroku and Vecel.
            It showcases my skills in building a full-stack web application.
          </p>
          <Link href="https://frontend-jade-two-39.vercel.app/">
            <p>View Project</p>
          </Link>
        </div>
        <div className="project">
          <h2>GitHub Repositories</h2>
          <p>Here are some of my projects hosted on GitHub:</p>
          <ul>
            <li>
              <Link href="https://github.com/pikxs08/webprojects.git">
                <p>Web Project todo list</p>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/pikxs08/weatherAPI.git">
                <p>Weather API</p>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/pikxs08/hangman-app.git">
                <p> Hangman Game</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .container {
          margin: 0 auto;
          max-width: 65ch;
          padding: 48px 0;
          text-align: center;
        }
        h1 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 32px;
        }
        .project {
          margin-bottom: 32px;
        }
        h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 16px;
        }
        p {
          font-size: 1rem;
          color: #718096;
          margin-bottom: 16px;
        }
        a {
          color: #3182ce;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s ease;
        }
        a:hover {
          color: #63b3ed;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin-bottom: 8px;
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
