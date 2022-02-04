import React, {useState} from "react";
import {FaFacebookSquare, FaWhatsappSquare,  } from "react-icons/fa";
import { SiGmail, SiGooglemaps} from "react-icons/si";
import {GiHamburgerMenu} from "react-icons/gi";
import {BsTelephoneFill} from "react-icons/bs";
import {HiMail} from "react-icons/hi";
import { NavLink,useLocation } from "react-router-dom";
import "./Style.css";

// import Logo from './image/ss-icon.jpg';


const Navbar=()=>{

    const [showMediaIcons, setShowMediaIcons] = useState(false);  
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    return (
        <>
        <div className="section">
        <nav className="main-nav">
            <div className="logo">
                <img className="ss-logo" src={require('../Image/ss-black-logo.png')} alt="logo" />    
            </div>
            <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                <ul>
                    <li className={splitLocation[1] === "" ? "menu-active" : ""}><NavLink className="nav-bar" to="/"><spna className="post-title" >HOME</spna></NavLink></li>
                    <li className={splitLocation[1] === "About" ? "menu-active" : ""}><NavLink className="nav-bar" to="/About"><spna className="post-title" >ABOUT US</spna></NavLink></li>
                    <li className={splitLocation[1] === "Project" ? "menu-active" : ""}><NavLink className="nav-bar" to="/Project"><spna className="post-title" >PROJECT</spna></NavLink></li>

                    <li className={splitLocation[1] === "Services" ? "menu-active" : ""}><NavLink className="nav-bar" to="/Services"><spna className="post-title" >SERVICES</spna></NavLink></li>
                    <li className={splitLocation[1] === "Contact" ? "menu-active" : ""}><NavLink className="nav-bar" to="/Contact"><spna className="post-title" >CONTACT US</spna></NavLink></li>
                </ul>                
            </div>
            <div className="social-media">
                <div className="social-media-icon">
                    <ul className="social-media-desktop">
                        <li>
                            <NavLink to="#"><FaFacebookSquare  className="Facebook"/></NavLink>                       
                            
                        </li>                    
                        <li>
                            <NavLink to="#"><SiGmail className="Gmail"/></NavLink>                       
                            
                        </li>
                        <li>
                            <NavLink to="#"><FaWhatsappSquare className="Whatsapp"/></NavLink>                       
                            
                        </li>
                        <li>
                            <NavLink to="#"><SiGooglemaps  className="Googlemaps"/></NavLink>                       
                            
                        </li>
                        <li>
                            <NavLink to="#"><BsTelephoneFill className="phone"/></NavLink>                       
                            
                        </li>
                    </ul>
                </div>
                {/* hamburger menu  */}
                <div className="hamburger-menu">
                    <a to="#" onClick={() => setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu /></a>
                </div>

            </div>           
        </nav>
        <div className="header">
            <div className="header-content">
                <ul>
                    <li><a href="#"><HiMail/> ss-construction@gmail.com</a></li>
                    <li><a href="#"><BsTelephoneFill/> 91-9632514780</a></li>
                </ul>
            </div>
        </div>
        </div>
        
        </>
    )
}
export default Navbar;