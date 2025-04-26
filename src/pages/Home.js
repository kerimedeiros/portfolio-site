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
          <p>Technical Support Engineer</p>

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
            <span>
              HTML, CSS, Tailwind, Bootstrap, JavaScript, React, Next.js, Liquid
              (Shopify)
            </span>
          </li>
          <li className="item">
            <h2>Backend</h2>
            <span>Node.js, Postgres, MySQL, RESTful APIs</span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>
              <p>
                <strong>Development</strong> — Git, GitHub, Visual Studio Code,
                NPM, Postman
              </p>
              <p>
                <strong>Ticketing & Support Systems</strong> — Salesforce,
                Zendesk, Intercom, HubSpot
              </p>
              <p>
                <strong>Project Management & Technical Documentation</strong> —
                Jira, Confluence, ReadMe, Airtable
              </p>
              <p>
                <strong>Digital Marketing & Advertising Technology</strong> —
                Display & Video 360 (DV360), Google Ad Manager, Meta Ads
                Manager, and other Ad Serving & Campaign Management Platforms
              </p>
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
