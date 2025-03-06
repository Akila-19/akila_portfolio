import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; 
import { ReactComponent as SchoolIcon } from "../assets/school.svg";
import { ReactComponent as WorkIcon } from "../assets/work.svg";


const AboutMe = () => {
  const timelineElements = [
    {
      id: 1,
      title: "Junior Cloud Developer ",
      location: "Bow Valley College, Canada",
      date: "Sept 2023 - Apr 2024",
      icon: "work",
    },
    {
      id: 2,
      title: "Post Graduate Diploma in Cloud Computing",
      location: "Bow Valley College, Canada",
      date: "Sept 2023 - Apr 2024",
      icon: "school",
    },
    {
      id: 3,
      title: "Front-end Developer",
      location: "Cognizant Technology Solutions, India",
      date: "Oct 2020 - Aug 2023",
      icon: "work",
    },
    {
      id: 4,
      title: "MEAN Stack Developer Intern",
      location: "Cognizant Technology Solutions, India",
      date: "Jan 2020 - May 2020",
      icon: "work",
    },
    {
      id: 5,
      title: "Graduated from college",
      location: "Anna University, India",
      date: "Aug 2016 - Nov 2020",
      icon: "school",
    },
  ];
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const timelineOffsetTop = document.querySelector('.vertical-timeline').offsetTop;
      const eventIndex = Math.floor((scrollTop - timelineOffsetTop) / 200);
      setActiveEventIndex(eventIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
    <div className='timeline-container'>
    <VerticalTimeline>
      {timelineElements.map((element) => (
        <VerticalTimelineElement
          key={element.id}
          className={`vertical-timeline-element--${element.color}`}
          contentStyle={{ background: 'white', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid white' }}
          date={element.date}
          iconStyle={{ background: element.icon === 'school' ? '#64ffda' : 'rgb(255, 69, 0)', color: '#fff' }} // Set background color based on icon value
          icon={element.icon === 'school' ? <SchoolIcon /> : <WorkIcon />} 
        >
          <h3 className="vertical-timeline-element-title">{element.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{element.location}</h4>
          <p>{element.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
    </div>
    </>
   
  );
};

export default AboutMe;
