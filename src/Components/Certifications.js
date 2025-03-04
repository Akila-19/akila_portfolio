import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

function Certifications() {
  const [showCertificate, setShowCertificate] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Set worker path from a reliable CDN inside the component
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js`;
  }, []);  // Empty dependency array ensures this runs once when the component mounts

  // List of certificates
  const certificates = [
    { title: 'React Developer', subtitle: 'Certification', pdfUrl: './Terraform.pdf' },
  ];

  const handleViewCertificate = (pdfUrl) => {
    setSelectedCertificate(pdfUrl);
    setShowCertificate(true);
  };

  const handleCloseCertificate = () => {
    setShowCertificate(false);
    setSelectedCertificate(null);
  };

  return (
    <div>
      <div className="certificates-container">
        {certificates.map((certificate, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{certificate.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{certificate.subtitle}</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#" onClick={() => handleViewCertificate(certificate.pdfUrl)}>
                View Certificate
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Display PDF when 'showCertificate' state is true */}
      {showCertificate && (
        <div className="pdf-container">
          <button onClick={handleCloseCertificate}>Close</button>
          <Document file={selectedCertificate}>
            <Page pageNumber={1} />
          </Document>
        </div>
      )}
    </div>
  );
}

export default Certifications;
