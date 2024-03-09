import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="header">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/about">
          <p>About</p>
        </Link>
        <Link href="/projects">
          <p>Projects</p>
        </Link>
        <Link href="/contact">
          <p>Contact me</p>
        </Link>
      </div>

      <style jsx>{`
        div {
          width: 100%;
          text-align: left;
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
          font-size: 14px;
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
