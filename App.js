import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import MoveToTop from "./Components/MoveToTop";
import RingLoader from "react-spinners/RingLoader";
import Experience from "./Components/Experience";
import MyResume from "./Components/MyResume";
import Certifications from "./Components/Certifications";



function App() {
  const[Loading,SetLoading]=useState(true);

  useEffect(()=>{
    SetLoading(true)

    setTimeout(()=>{
    SetLoading(false)}
    ,5000)
  },[])  
  
  return (
    <>
      {Loading ? (
      <div className="loader"> 
        <RingLoader color="#36d7b7" size={200} />
      </div>
      ):
      (
      <div>
      <Nav/>
      {/* <Home/> */}
      <MoveToTop/>

      <Routes>
        <Route path="/akila_portfolio" element={<Home/>} />
        <Route path="/Aboutme" element={<AboutMe/>}/>
        <Route path="/myR" element={<MyResume/>}/>

        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path= "/Certification" element={< Certifications/>}/>
      </Routes>
      
      <Footer/>
      </div>
      )}  
    </>
  );
}

export default App;
