import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi there, I'm Keri.</h2>
        <div className="prompt">
          <p>I'm a software developer with a background in digital marketing.</p>
          <a
            href="mailto:kerimedeiros@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          <EmailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/kmedeiros1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.github.com/kerimedeiros"
            target="_blank"
            rel="noopener noreferrer"
          >
          <GitHubIcon />
          </a>
          <a
            href="https://dev.to/kerimedeiros"
            target="_blank"
            rel="noopener noreferrer"
          >
          <LogoDevIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2>Frontend</h2>
            <span>HTML, CSS, Tailwind, Bootstrap, JavaScript, React</span>
          </li>
          <li className="item">
            <h2>Backend</h2>
            <span>Node.js, Express.js, Knex.js, PostgreSQL, RESTful APIs</span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>Test-Driven Development (Mocha, Chai, Jest), Vercel, Git/GitHub, Visual Studio Code, Node Package Manager, Salesforce, Zendesk, Project Management Systems (Jira, Trello, Basecamp), Google Ad Manager & AdWords </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
