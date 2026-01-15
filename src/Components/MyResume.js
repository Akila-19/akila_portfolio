import React from "react";
import { Container, Row } from "react-bootstrap";
import pdf from "../Akila_Vasan_DE.pdf";
import '../index.css'; 

function MyResume() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="justify-content-center resume">
          <iframe
            src={pdf}
            width="100%"
            height="600px"
            style={{ border: "none", borderRadius: "8px" }}
            title="Resume"
          />
        </Row>
      </Container>
    </div>
  );
}

export default MyResume;
