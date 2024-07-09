import React from 'react'; 
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap,  FaDocker, FaAws } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { IoLogoAngular } from 'react-icons/io';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiTerraform, SiKubernetes, SiMysql } from 'react-icons/si'; 


const Skills = () => {
    const icons = {
        Angular: <IoLogoAngular/>,
        AWS: <FaAws />  ,
        Docker: <FaDocker />, 
        Terraform: <SiTerraform/>,
        Kubernetes: <SiKubernetes/>,
        Python: <FaPython/>,
        Html: <FaHtml5 />,
        Css : <FaCss3Alt />,
        TypeScript: <SiTypescript />,
        Figma: <FaFigma />,
        Bootstrap: <FaBootstrap />,
        React: <FaReact />,
        Javascript: <DiJavascript1 />,
        MySQL: <SiMysql />,
        Postman: <SiPostman />,
        Node: <DiNodejs />,
        Express: <SiExpress />,
        MongoDb: <SiMongodb />,
        Git: <FaGitAlt />,
        Github: <FaGithub />,
        Npm: <FaNpm />,    
    };

    return (
        <div className='SkillsContainer flex'>
            {Object.keys(icons).map((key) => (
                <div key={key} title={key} className='SkillBox'>
                    {icons[key]}
                </div>
            ))}
        </div>
    );
}

export default Skills;
