import React from "react";
import { Document, Page } from "react-pdf";
import pdf from "../assets/keri-medeiros-resume.pdf";
import "../styles/Resume.css"
import DownloadIcon from '@mui/icons-material/Download';

function Resume() {

  return (
    <div className="resume">
        <Document
            file={pdf}
            loading="Loading PDF..."
            options={{ workerSrc: "/pdf.worker.js" }}
            className="document"
        >
            <Page pageNumber={1} className="page"/>
        </Document>
        <a href={pdf} download="keri-medeiros-resume" target='_blank' rel="noreferrer">
            <DownloadIcon title="Download PDF"/>
        </a>
    </div>
  );
}

export default Resume;