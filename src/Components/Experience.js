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
import task1 from '../assets/task1.png'
import task2 from '../assets/task2.png'
import task3 from '../assets/task3.png'
import docker from '../assets/docker.png'
import docker2 from '../assets/docker2.png'
import micro1 from '../assets/micro1.png'
import micro2 from '../assets/micro2.png'
import micro3 from '../assets/micro3.png'



function Experience() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [showImageModal, setShowImageModal] = useState(false);
    const items = [
{
    id: 1, 
    mediumLink: `https://medium.com/@akila98sri/building-a-complete-ci-cd-pipeline-step-by-step-guide-f79f597ae137`, 
    gitLink: `https://github.com/Akila-19/taskmanager`, // UPDATE THIS
    images: [
        task1,
        task2,
        task3,  
    ],
    title: "CI/CD Pipeline with Jenkins, Kubernetes, ArgoCD & Monitoring",
    technologies: ["Jenkins", "Kubernetes", "ArgoCD", "Prometheus", "Grafana", "Docker", "GitOps", "kubectl", "Slack"],
    description: "Built comprehensive CI/CD pipeline integrating Jenkins for continuous integration, Kubernetes for container orchestration, ArgoCD for GitOps-based deployment, and Prometheus/Grafana stack for complete observability and monitoring.",
    responsibilities: `
    - Designed and implemented Jenkins pipeline with multi-stage builds and automated testing - SonarQube integration, Trivy security scans
    - Created Docker images and pushed to Docker Hub registry
    - Configured Kubernetes clusters for development, staging, and production environments
    - Deployed ArgoCD for GitOps workflow enabling declarative continuous deployment
    - Set up Prometheus for metrics collection from applications and infrastructure
    - Configured Grafana dashboards for real-time monitoring and alerting
    - Integrated automated security scanning and quality gates in CI pipeline`,
    achievements: `
    - Reduced deployment time from hours to minutes with complete automation
    - Achieved 99.9% deployment success rate through automated rollback mechanisms
    - Improved application reliability with proactive monitoring and alerting
    - Enhanced security posture with integrated vulnerability scanning and code quality checks
    - Increased developer productivity by 50% through streamlined CI/CD processes
    - Enabled self-service deployments for development teams through GitOps
    - Published detailed CI/CD guide on Medium with architecture diagrams and implementation steps`
},
{
    id: 2,
    mediumLink: `https://medium.com/@akila98sri/docker-multi-stage-builds-a-practical-guide-to-image-optimization-acd6baa27bb7`, 
    images: [
       docker,
       docker2
    ],
    title: "Docker Multi-Stage vs Single-Stage Build Optimization",
    technologies: ["Docker", "Multi-Stage Builds", "Container Optimization", "Docker Compose", "Alpine Linux", "Image Security", "Best Practices"],
    description: "Comprehensive analysis and implementation comparing single-stage and multi-stage Docker builds. Demonstrated significant image size reduction, improved security, and faster deployment times through multi-stage build optimization techniques.",
    responsibilities: `
    - Analyzed differences between single-stage and multi-stage Docker build processes
    - Implemented single-stage Dockerfiles as baseline for comparison
    - Designed optimized multi-stage Dockerfiles separating build and runtime dependencies
    - Utilized Alpine Linux base images for minimal container footprint
    - Implemented layer caching strategies for faster build times
    - Applied security best practices including non-root users and minimal attack surface
    - Benchmarked image sizes, build times, and runtime performance
    - Created Docker Compose configurations for local development and testing`,
    achievements: `
    - Reduced Docker image sizes by 70% using multi-stage builds (from 1.2GB to 350MB)
    - Decreased container startup time by 50% with optimized images
    - Improved security posture by removing build tools from production images
    - Reduced Docker registry storage costs by 65% across all applications
    - Accelerated CI/CD pipeline by 40% with faster image builds and pulls
    - Published comprehensive Docker optimization guide on Medium with performance comparisons`
},
{
    id: 3,
    mediumLink: `https://medium.com/@akila98sri/deploying-microservices-to-aws-eks-a-real-devops-journey-50648c67dc1e`,
    gitLink: `https://github.com/Akila-19/microservices-eks-terraform`, // UPDATE THIS
    images: [
        micro1,
        micro2,
        micro3
    ],
    title: "Deploying Microservices to AWS EKS using Terraform",
    technologies: ["Terraform", "AWS EKS", "Kubernetes", "Docker", "VPC", "IAM", "ALB", "Auto Scaling", "CloudWatch", "Microservices"],
    description: "Automated deployment of microservices architecture to AWS EKS using Terraform infrastructure as code. Provisioned complete AWS infrastructure including VPC, EKS cluster, node groups, and deployed containerized microservices with load balancing and auto-scaling.",
    responsibilities: `
    - Designed Terraform modules for AWS EKS cluster provisioning
    - Created VPC with public and private subnets across multiple availability zones
    - Configured EKS cluster with managed node groups and auto-scaling policies
    - Implemented IAM roles and policies for EKS cluster and service accounts
    - Deployed microservices (user service, product service, API gateway) to EKS
    - Configured Application Load Balancer for external traffic routing
    - Set up CloudWatch logging and monitoring for cluster and applications
    - Implemented Kubernetes deployments, services, and ingress configurations`,
    achievements: `
    - Successfully deployed production-ready microservices on AWS EKS
    - Reduced infrastructure provisioning time from days to 30 minutes using Terraform
    - Achieved 99.95% uptime with Multi-AZ EKS deployment
    - Implemented auto-scaling handling 10x traffic spikes seamlessly
    - Decreased infrastructure costs by 40% through right-sizing and spot instances
    - Published complete EKS deployment guide on Medium with Terraform code examples`
},
        {
            id: 4,
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
            id: 5,
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
            id: 6,
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
      
    ];
  


const handleImageClick = (item) => {
    if (item.mediumLink) {
        window.open(item.mediumLink, '_blank');
    } else if (item.gitLink) {
        window.open(item.gitLink, '_blank');
    }
};
return (
    <div className="container flex items-center justify-center p-4">
        <div className="flex flex-wrap justify-center gap-y-16 gap-x-12">
            {items.map((item) => (
                <div key={item.id} className="relative">
                    <div className="projectCard block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <Carousel showArrows={false} showThumbs={false} autoPlay interval={3000} infiniteLoop>
                            {item.images && item.images.map((image, index) => (
                                <div key={index} onClick={() => handleImageClick(item)} style={{ cursor: 'pointer' }}>
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
                                    <div className="cardFooter flex items-center justify-center py-7 gap-4">
                                        {item.mediumLink && (
                                            <a href={item.mediumLink} target="_blank" rel="noreferrer" style={{ width: "50px" }}>
                                                <svg style={{ color: "black", width: "30px", height: "30px" }} viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                                                </svg>
                                            </a>
                                        )}
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