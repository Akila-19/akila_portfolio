import React, { useState } from 'react';
import { FaGithub, FaTimesCircle } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CLH1 from '../assets/CLH1.png';
import CLH2 from '../assets/CLH2.png';
import CLH3 from '../assets/CLH3.png';
import CLH4 from '../assets/CLH4.png';
import CLH5 from '../assets/CLH5.png';
import CLH6 from '../assets/CLH6.png';
import CLH7 from '../assets/CLH7.png';
import CLH8 from '../assets/CLH8.png';
import CLH9 from '../assets/CLH9.png';
import CLH10 from '../assets/CLH10.jpg';
import CLH from '../assets/CLH.jpg';
import DEV from '../assets/DEV.jpg'
import ICS from '../assets/ICS.jpg';
import ICS1 from '../assets/ICS1.png';
import ICS2 from '../assets/ICS2.png';
import ICS3 from '../assets/ICS3.png';
import ICS4 from '../assets/ICS4.png';
import ICS5 from '../assets/ICS5.png';
import ICS6 from '../assets/ICS6.png';
import ICS7 from '../assets/ICS7.png';
import ICS8 from '../assets/ICS8.png';
import CC1 from '../assets/CC1.png'
import CC2 from '../assets/CC2.png'
import CC3 from '../assets/CC3.png'
import CC4 from '../assets/CC4.png'
import CC5 from '../assets/CC5.png'
import CC6 from '../assets/CC6.png'
import CC7 from '../assets/CC7.png'
import CC8 from '../assets/CC8.png'
import CC9 from '../assets/CC9.png'
import CC10 from '../assets/CC10.png'
import VTR from '../assets/VTR.jpg'



function Experience() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [showImageModal, setShowImageModal] = useState(false);
    const items = [
        {
            id: 1,
            gitLink: `https://github.com/Akila-19/Cloud_Assignments.git`,
            images: [
                CC1,CC2,CC3,CC4,CC5,CC6,CC7,CC8,CC9,CC10
            ],
            title: " Cloud Computing, Full Stack Development, DevOps, Security & Compliance, Agile Leadership, Software Development",
            technologies: ["EC2", "S3", "RDS", "VPC", "IAM", "CloudFront", "SNS", "SQS", "LightSail", "DynamoDB ", "EBS", "Lambda", "Angular", "React", "Node.js", "Express.js","Terraform", "CI/CD", "Docker", "Kubernetes", "Jenkins"],
            description: "Expertise in architecting and deploying comprehensive AWS solutions, proficient in both frontend and backend development. Skilled in designing and implementing CI/CD pipelines and Docker containerization. Strong focus on security best practices and compliance standards, and proven ability to lead cross-functional teams using agile methodologies. Extensive experience in managing the end-to-end software development lifecycle.",
            responsibilities: `
            - Architecting and deploying AWS solutions, ensuring scalability, reliability, and security.
            - Developing frontend and backend solutions using various technologies to meet project requirements.
            - Designing and implementing CI/CD pipelines for continuous integration and delivery.
            - Ensuring compliance with security best practices and regulatory standards in cloud environments.
            - Leading cross-functional teams in agile methodologies to deliver projects on time and within scope.
            - Managing the software development lifecycle from requirements gathering to deployment.`,
            achievements: `
            - Successfully deployed AWS solutions that improved system scalability and performance.
            - Developed robust frontend and backend solutions that met or exceeded project requirements.
            - Implemented CI/CD pipelines that streamlined the development and deployment process.
            - Ensured compliance with security standards, protecting sensitive data and systems.
            - Led teams to successfully deliver projects, fostering collaboration and achieving project goals.
            - Successfully managed software projects from inception to deployment, ensuring high-quality deliverables and client satisfaction.`
        },

        {
            id: 2,
            images: [
                ICS,
                ICS1,ICS2,ICS3,ICS4,ICS5,ICS6,ICS7,ICS8
            ],
            gitLink: `https://github.com/CLCM3102-Ice-Cream-Shop/frontend-ice-cream.git`,
            title: "Comprehensive Website Development & AWS Deployment of Ice cream digital checkout system",
            technologies: ["Angular", "Bootstrap", "MySQL", "Python", "AWS EC2", "RDS", "S3", "SNS", "CI/CD", "Docker Compose", "Security Compliance"],
            description: "Led the development of an interactive website for a specialty ice cream shop, utilizing Angular, Bootstrap, and Python. Orchestrated deployment on AWS EC2, RDS, S3, and SNS, resulting in fault tolerance and scalability improvements. Established resilient CI/CD pipelines and Docker configurations, optimizing development workflows and efficiency.",
            responsibilities: `
            - Led development of interactive website for specialty ice cream shop, resulting in increased online revenue and customer retention.
            - Orchestrated deployment on AWS EC2, RDS, S3, and SNS, improving fault tolerance and scalability.
            - Established CI/CD pipelines and Docker configurations, optimizing development workflows and efficiency.
            - Implemented security best practices and compliance standards to ensure data protection and regulatory adherence.`,
            achievements: `
            - Increased online revenue and customer retention through development of interactive website.
            - Improved fault tolerance and scalability through deployment on AWS infrastructure.
            - Optimized development workflows and efficiency through CI/CD pipelines and Docker configurations.
            - Ensured data protection and regulatory adherence through implementation of security best practices.`,
        },
        {
            id: 3,
            images: [
                CLH,
                CLH1,CLH10,
                CLH2, CLH3,CLH4,CLH5,CLH6,CLH7, CLH8, CLH9
            ],
            gitLink: `https://github.com/Akila-19/CloudLearnerHub.git`,
            title: "End-to-End Development and AWS Cloud Hosting for Innovative Learning Platform",
            technologies: ["React", "Bootstrap", "Node.js", "Express.js", "AWS EC2", "RDS", "Terraform", "Agile Methodologies"],
            description: "Spearheaded the development of an Innovative Learning Platform, leveraging React and Bootstrap for the frontend and Node.js with Express.js for the backend. Engineered scalable infrastructure on AWS EC2 and RDS using Terraform for automated provisioning and management, ensuring optimal resource utilization and scalability.",
            responsibilities: `
            - Led the development of an Innovative Learning Platform, resulting in an interactive and user-centric website.
            - Engineered scalable infrastructure on AWS EC2 and RDS using Terraform, ensuring efficient resource utilization and scalability.
            - Implemented advanced caching mechanisms and CDN integration, enhancing performance and user experience by 40%.
            - Led a cross-functional team in agile development methodologies, ensuring timely project delivery and alignment with client requirements.`,
            achievements: `
            - Developed an interactive and user-centric website for learning platform.
            - Engineered scalable infrastructure on AWS using Terraform, ensuring efficient resource utilization and scalability.
            - Enhanced performance and user experience by implementing advanced caching mechanisms and CDN integration.
            - Ensured timely project delivery and alignment with client requirements through agile development methodologies.`,
        },
        {
            id: 4,
            gitLink: ``,
            images: [
                VTR
            ],
            title: "WordPress to Mobile App Conversion & AWS Migration",
            technologies: ["AWS Services", "WordPress", "Mobile App Development", "AppMySite", "Cloud Migration"],
            description: "Led the migration of a WordPress website to a mobile app, leveraging AWS LightSail for cloud hosting. Collaborated with stakeholders to define requirements and deliver a user-centric solution. Executed AWS LightSail cloud migration, optimizing infrastructure for scalability and seamless integration with WordPress CMS.",
            responsibilities: `
            - Spearheaded end-to-end mobile app development initiative, achieving 25% increase in app downloads and 30% boost in user engagement metrics.
            - Executed AWS LightSail cloud migration, resulting in 50% faster website loading times and 40% increase in site traffic.
            - Collaborated with stakeholders to define requirements and ensure alignment with project goals.
            - Implemented best practices for cloud migration, ensuring scalability and reliability.
            - Facilitated seamless integration between mobile app and WordPress CMS.`,
            achievements: `
            - Successfully migrated WordPress website to mobile app, improving user engagement and app downloads.
            - Optimized infrastructure on AWS LightSail, resulting in improved website performance and increased traffic.
            - Collaborated effectively with stakeholders to achieve project objectives.`,

        },
        {
            id: 5,
            gitLink: ``,
            images: [
                DEV
            ],
            title: "Frontend Developer – Cognizant",
            technologies: [
                "Angular 12",
                "React",
                "NgRx",
                "Redux",
                "D3.js",
                "Chart.js",
                "JavaScript",
                "TypeScript",
                "HTML",
                "CSS",
                "jQuery",
                "SASS",
                "JSX",
                "Node.js",
                "Express.js",
                "SQL",
                "MySQL",
                "PHP",
                "Git"
            ],
            description: `
            Led frontend development on projects, achieving pixel-perfect interfaces aligned with user experience goals. Specialized in creating Single Page Applications (SPAs) using Angular 12 and React, significantly enhancing page load times and user engagement. Engineered state management solutions with NgRx and Redux, optimizing application data flow and reducing API response times by 40%. Proficient in modern JavaScript/TypeScript patterns, D3.js, and Chart.js, improving data visualization efficiency by 30% and user engagement by 25%. Transformed design mockups into intuitive web interfaces with HTML, CSS, jQuery, SASS, JavaScript, and JSX.
          `,
            responsibilities: `
            - Led frontend development, ensuring alignment with design wireframes and user experience goals.
            - Crafted SPAs using Angular 12 and React, enhancing page load times and user engagement.
            - Engineered state management solutions with NgRx and Redux, optimizing data flow and reducing API response times by 40%.
            - Optimized application performance through code splitting, lazy loading, and efficient data binding techniques.
            - Enhanced user experience and data presentation using D3.js and Chart.js, increasing data visualization efficiency by 30%.
            - Fostered codebase consistency and maintainability with modern JavaScript/TypeScript patterns.
            - Implemented HTML, CSS, jQuery, SASS, JavaScript, and JSX to create seamless user interfaces.
            - Demonstrated proficiency in RESTful API integration with Angular HTTP client and Axios, improving data communication efficiency by 30%.
            - Engineered scalable server-side applications with Node.js and Express.js, increasing API responsiveness and reliability by 40%.
            - Utilized MySQL for database management, optimizing data storage and retrieval processes.
            - Executed PHP development tasks, enhancing backend versatility.
            - Conducted unit tests and code reviews to maintain code quality and reliability.
            - Mastered Git for version control, ensuring collaborative development and codebase stability.
          `,
            achievements: `
            - Achieved pixel-perfect interfaces and user experience alignment in frontend development projects.
            - Enhanced page load times and user engagement through strategic SPA development.
            - Reduced API response times by 40% with optimized state management solutions.
            - Improved data visualization efficiency by 30% and user engagement by 25% using D3.js and Chart.js.
            - Streamlined development processes and enhanced scalability with modern JavaScript/TypeScript patterns.
            - Ensured seamless user experiences and increased usability through intuitive web interfaces.
            - Increased API responsiveness and reliability by 40% with robust server-side applications.
            - Optimized data storage and retrieval processes with proficient MySQL database management.
            - Enhanced backend versatility with proficient PHP development tasks.
            - Maintained code quality and reliability through rigorous unit tests and code reviews.
            - Ensured collaborative development and codebase stability with Git version control mastery.
          `
        },
        {
            id: 6,
            gitLink: ``,
            images: [
                DEV
            ],
            title: "E-commerce Website Development with MEAN Stack",
            technologies: [
                "MongoDB",
                "Express.js",
                "Angular",
                "Node.js",
                "RESTful API Development",
                "Database Management",
                "Frontend Development",
                "GIT"
            ],
            description: `
            Demonstrated hands-on experience in web development with a focus on the MEAN stack (MongoDB, Express.js, Angular, Node.js), resulting in a 30% improvement in website performance and scalability. Employed MongoDB for efficient database management, executing data modeling, indexing, and querying strategies to ensure optimal performance and scalability. Engineered robust RESTful APIs using Node.js and Express, enabling seamless communication between front-end and back-end components. Crafted interactive and responsive user interfaces with Angular, integrating features to elevate user experience and engagement.
          `,
            responsibilities: `
            - Demonstrated hands-on experience in web development with a focus on the MEAN stack (MongoDB, Express.js, Angular, Node.js).
            - Improved website performance and scalability by 30%.
            - Employed MongoDB for efficient database management, executing data modeling, indexing, and querying strategies.
            - Engineered robust RESTful APIs using Node.js and Express, ensuring seamless communication between front-end and back-end components.
            - Crafted interactive and responsive user interfaces with Angular, integrating features to enhance user experience and engagement.
          `,
            achievements: `
            - Achieved a 30% improvement in website performance and scalability.
            - Ensured optimal database performance and scalability with MongoDB.
            - Enabled seamless communication between front-end and back-end components through robust RESTful APIs.
            - Enhanced user experience and engagement with interactive and responsive user interfaces.
          `
        }
    ];
  

  const handleImageClick = (images) => {
    setSelectedImages(images); // Set clicked images array
    setShowImageModal(true);  // Show the modal
};

const closeImageModal = () => {
    setShowImageModal(false);  // Close the modal
    setSelectedImages([]); // Clear the images
};

return (
    <div className="container flex items-center justify-center p-4">
        <div className="flex flex-wrap justify-center gap-y-16 gap-x-12">
            {items.map((item) => (
                <div key={item.id} className="relative">
                    <div className="projectCard block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <Carousel showArrows={false} showThumbs={false} autoPlay interval={3000} infiniteLoop>
                            {item.images && item.images.map((image, index) => (
                                <div key={index} onClick={() => handleImageClick(item.images)}>  {/* Add click handler */}
                                    <img src={image} alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        </Carousel>
                        <div className='details' onClick={() => setSelectedId(item.id)} key={item.id}>
                            <h5 className="my-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.title}
                            </h5>
                            <div className="flex flex-wrap justify-center gap-1">
                                {item.technologies.map((tech, index) => (
                                    <p key={index} className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-full mr-2 mb-2 whitespace-nowrap" style={{ width: "fit-content" }}>
                                        {tech}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Modal for image */}
        {showImageModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-4 shadow-md" style={{ width: '800px', height: '500px' }}>
                        <div className="relative h-full">
                        <button onClick={closeImageModal} className="relative top-0 left-0 p-2 text-white bg-red-500 rounded-full">
                                <FaTimesCircle />
                            </button>
                            <Carousel showArrows={true} showThumbs={false} autoPlay interval={3000} infiniteLoop>
                                {selectedImages.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} alt={`Slide ${index + 1}`} />
                                    </div>
                                ))}
                            </Carousel>
                           
                        </div>
                    </div>
                </div>
            )}

        {/* Modal for project details */}
        {selectedId && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                {items &&
                    items.map((item) =>
                        item.id === selectedId ? (
                            <div className="selectedCard bg-white rounded-lg p-4 shadow-md mx-auto" key={item.id} style={{ maxHeight: "86vh", width: "70%", overflow: "auto" }}>
                                <div className="relative">
                                    <div>
                                        <h2 className="text-xl font-bold mb-2 text-blue-600">{item.title}</h2>
                                        <h5 className="text-sm font-bold mb-1 text-gray-700">Technologies Used:</h5>
                                        <ul className="text-black">
                                            {item.technologies && item.technologies.join(" | ")}
                                        </ul>
                                        <h5 className="text-sm font-bold mb-1 text-gray-700">Description:</h5>
                                        <p className="text-md text-gray-700 mb-4">{item.description}</p>
                                        <h5 className="text-sm font-bold mb-1 text-gray-700">Responsibilities:</h5>
                                        <ul className="list-disc pl-5 text-md text-gray-700 mb-4">
                                            {item.responsibilities.split("\n").filter((line) => line.trim() !== "").map((line, index) => (
                                                <li key={index}>{line.trim().replace(/^-\s*/, "")}</li>
                                            ))}
                                        </ul>
                                        <h5 className="text-sm font-bold mb-1 text-gray-700">Achievements:</h5>
                                        <ul className="list-disc pl-5 text-md text-gray-700">
                                            {item.achievements.split("\n").filter((line) => line.trim() !== "").map((line, index) => (
                                                <li key={index}>{line.trim().replace(/^-\s*/, "")}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="cardFooter flex items-center justify-center py-7">
                                        {item.gitLink && (
                                            <a href={item.gitLink} target="_blank" rel="noreferrer" style={{ width: "50px" }}>
                                                <FaGithub style={{ color: "black", width: "30px", height: "30px" }} />
                                            </a>
                                        )}
                                        <button style={{ color: "black", fontSize: "30px" }} onClick={() => setSelectedId("")}>
                                            <FaTimesCircle />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    )}
            </div>
        )}
    </div>
);
}

export default Experience;