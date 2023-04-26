import React from 'react';
import avatar from '../assets/avatar.png';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ResumePDF from '../assets/keri-medeiros-resume.pdf';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img alt="keri avatar" src={avatar} />
        <h2>Keri Medeiros</h2>
        <div className="prompt">
          <p>
            Full stack software developer with a background in digital marketing
            & advertising technology.
          </p>

          <a
            href={ResumePDF}
            download="keri-medeiros-resume"
            target="_blank"
            rel="noreferrer"
          >
            <AssignmentIndIcon title="Download PDF" />
          </a>

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
            <span>
              Test-Driven Development (Mocha, Chai, Jest), Vercel, Git/GitHub,
              Visual Studio Code, Node Package Manager, Salesforce, Zendesk,
              Project Management Systems (Jira, Trello, Basecamp), Google Ad
              Manager & AdWords
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
