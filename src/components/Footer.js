import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ResumePDF from '../assets/keri-medeiros-resume.pdf';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href={ResumePDF}
          download="keri-medeiros-re"
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
      <p className="privacy">
        <span className="copyright">&copy; 2025 Keri Medeiros</span>
        <br />
        <span className="privacyText">
          This site may use embedded tools to detect unauthorized access or
          misuse of content. These tools may log IP addresses and browser
          information for security purposes only and are not used for tracking
          or marketing.
        </span>
      </p>
    </div>
  );
}

export default Footer;
