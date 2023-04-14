import React from "react"; 
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import "../styles/Footer.css"; 

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
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
      <p> &copy; 2023 Keri Medeiros</p>
    </div>
  )
}

export default Footer
