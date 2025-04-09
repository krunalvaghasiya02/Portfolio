import React,{useEffect,useState} from "react";
import { NavLink } from "react-router-dom";
import './introduction.css' 
const Introduction = () => {
    const titles = [
        "Web Developer.",
        "Web Designer.",
        "Freelancer.",
        "React js Developer.",
        "Front End Developer."
      ];
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }, 2900); // 3s for each animation: typing + pause + erase
  
      return () => clearTimeout(timeout);
    }, [activeIndex]);
  
  return (

    <section className="introduction-section">
      <div className="container">
        <div className="row flex">
          <div className="box">
            <div className="content">
              <span>HELLO</span>
              <h2>
                i'm Krunal Vaghasiya a <br></br>
               
                  <span key={activeIndex} className="animated-text">
                    {titles[activeIndex]}
                  </span>
               
              </h2>
              <p>
                A personal portfolio is a collection of my work, achievements,
                and skills that highlights my abilities and professional
                growth. It serves as
              </p>
              <div className="btn">
                <NavLink to='/Projects'>View Projects</NavLink>
              </div>
            </div>
          </div>
          <div className="box flex">
            <div className="image-box">
                {/* <img src="../../../image/krunal.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
