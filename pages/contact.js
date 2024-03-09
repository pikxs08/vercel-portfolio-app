import Link from "next/link";
import Header from "../components/Header";

export default function Contact() {
  return (
    <>
      <Header />

      <div className="container">
        <h1>Contact Me</h1>
        <div className="contact-info">
          <p>Email: pieter.slabbert27@gmail.com</p>
          <p>Phone: +27744270735</p>
          <p>Region: Somerset West, Cape Town</p>
          <p>
            LinkedIn:
            <Link
              href="https://www.linkedin.com/in/pieter-slabbert-714996171/"
              target="_blank"
            >
              <p>Your Profile</p>
            </Link>
          </p>
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
        .contact-info {
          font-size: 1rem;
          color: #718096;
        }
        p {
          margin-bottom: 16px;
        }
        a {
          color: #3182ce;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s ease;
        }
        a:hover {
          color: none;
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
