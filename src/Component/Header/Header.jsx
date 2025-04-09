import React from "react";
import "./header.css";
import { HiChevronDown } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
function Header() {
  //menu details json data starts 
  const menu=[
    {
      id:1,
      title:"Home",
      path:'/'
    },
    {
      id:2,
      title:"Projects",
      path:'/',
      arrow:<HiChevronDown />,
      ddmenu:[
        {
          id:101,
          ddtitle:'Restaurant',
          ddpath:'/',
          arrow:<IoIosArrowForward />,
        },
        {
          id:102,
          ddtitle:'Social media',
          ddpath:'/',
          arrow:<IoIosArrowForward />,
        },
        {
          id:103,
          ddtitle:'Charity',
          ddpath:'/',
          arrow:<IoIosArrowForward />,
        },
        {
          id:104,
          ddtitle:'Honey Shope',
          ddpath:'/',
          arrow:<IoIosArrowForward />,
        },
        {
          id:105,
          ddtitle:'Agriculture',
          ddpath:'/',
          arrow:<IoIosArrowForward />,
        }
      ]
    },
    {
      id:3,
      title:"About",
      path:'/'
    },
    {
      id:4,
      title:"Contac",
      path:'/'
    },
    {
      id:5,
      title:"Service",
      path:'/'
    }
  ]
   //menu details json data ends 

//  contacts json data start
 const contac=[
  {
    id:1,
    icon:<FaInstagram />
  },
  {
    id:2,
    icon:<FaFacebookF />
  },
  {
    id:3,
    icon:<FaLinkedinIn />
  },
  {
    id:4,
    icon:<FaGithub />
  }
 ] 
//  contacts json data end 
  return (
    <>
      <header className="header-section dark-theme">
        <div className="container">
          <div className="row flex">
          <div className="logo">
            <div className="image-box">
              <img src="../../../image/KCS.png" alt="Company logo of KCS" />
            </div>
          </div>
          <div className="menu">
            <ul className="flex">
            {
              menu.map((val)=>{
                const{id,title,path,ddmenu,arrow}=val;
                return(
                  <li key={id}><NavLink to={path}>{title} <span>{arrow}</span>
                  {
                    ddmenu&&<div className="DropDown">
                <ul>
                {
                  ddmenu.map((value)=>{
                    const {id,ddtitle,ddpath,arrow}=value;
                    return(<li key={id}><NavLink path={ddpath}>{ddtitle}</NavLink><span>{arrow}</span></li>)
                    
                  })
                }
                
                </ul>
              </div>
                  }</NavLink>
                  
                  </li>
                )
              })
            }
             
            </ul>
          </div>
          <div className="contacts flex">
            <ul className="flex">
            {
              contac.map((val)=>{
                const{id,icon}=val;
                return(
                  <li key={id}><NavLink>{icon}</NavLink></li>
                )
              })
            }
            </ul>
            <div className="btn flex">
              <button className="flex">
                <span className="top"></span>
                <span className="mid"></span>
                <span className="botom"></span>
              </button>
            </div>
          </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
