import React, { useState } from "react";

function Certifications() {
  const [showCertificate, setShowCertificate] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // List of certificates - Add your certifications here
  const certificates = [
    {
      title: "HashiCorp Certified: Terraform Associate",
      subtitle: "Certification",
      issuer: "HashiCorp",
      date: "Febuary 2025",
      description:
        "Advanced certification for building modern React applications with hooks and context API.",
      skills: ["React", "JavaScript", "State Management"],
      pdfUrl: `${process.env.PUBLIC_URL}/Terraform.pdf`,
      icon: "📜",
    },
  ];

  const handleViewCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setShowCertificate(true);
  };

  const handleCloseCertificate = () => {
    setShowCertificate(false);
    setSelectedCertificate(null);
  };

  return (
    <div className="certifications-page">
      <h1 className="page-title">My Professional Certifications</h1>

      <div className="certificates-container">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-card">
            <div className="card-header">
              <span className="card-header-icon">{certificate.icon}</span>
              <span>Certificate</span>
            </div>
            <div className="card-body">
              <h3 className="card-title">{certificate.title}</h3>
              <h4 className="card-subtitle">{certificate.subtitle}</h4>
              <p className="card-text">{certificate.description}</p>

              <div className="card-meta">
                <div className="card-meta-item">
                  <span className="card-meta-icon">🏢</span>
                  <span>{certificate.issuer}</span>
                </div>
                <div className="card-meta-item">
                  <span className="card-meta-icon">📅</span>
                  <span>{certificate.date}</span>
                </div>
              </div>

              <div className="card-actions">
                <button
                  className="view-button"
                  onClick={() => handleViewCertificate(certificate)}
                >
                  <span>View Certificate</span>
                  <span>📄</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showCertificate && (
        <div className="pdf-modal-backdrop" onClick={handleCloseCertificate}>
          <div className="pdf-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pdf-modal-header">
              <h3 className="pdf-modal-title">
                {selectedCertificate.title} Certificate
              </h3>
              <button
                className="pdf-modal-close"
                onClick={handleCloseCertificate}
              >
                ×
              </button>
            </div>

            <div className="pdf-modal-content">
              {/* Using iframe for PDF display instead of react-pdf to avoid worker issues */}
              <iframe
                src={selectedCertificate.pdfUrl}
                title={`${selectedCertificate.title} Certificate`}
                className="pdf-iframe"
              />
              <h1>Hello Akils</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certifications;