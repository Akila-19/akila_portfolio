import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Card, CardMedia } from "@mui/material";
import pdf from "../Akilandeshwari_Srinivasan.pdf";
import '../index.css'; 

function MyResume() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
      <Row className="justify-content-center resume">
  <Card className="resume-card">
    <CardMedia
      className="cardmedia"
      component="iframe"
      src={pdf}
    />
  </Card>
</Row>

      </Container>
    </div>
  );
}

export default MyResume;
