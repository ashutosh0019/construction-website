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
        <nav  className="main-nav">
            <div className="logo">
                <NavLink to="https://www.sundusingh.com/">
                    <img className="ss-logo" src={require('../Image/ss-black-logo.png')} alt="logo" />  
                </NavLink>  
            </div>
            <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                <ul>
                    <li className={splitLocation[1] === "" ? "menu-active" : ""}><a className="nav-bar" href="/"><spna className="post-title" >HOME</spna></a></li>
                    <li className={splitLocation[1] === "About" ? "menu-active" : ""}><a className="nav-bar" href="/About"><spna className="post-title" >ABOUT US</spna></a></li>
                    <li className={splitLocation[1] === "Project" ? "menu-active" : ""}><a className="nav-bar" href="/Project"><spna className="post-title" >PROJECT</spna></a></li>

                    <li className={splitLocation[1] === "Services" ? "menu-active" : ""}><a className="nav-bar" href="/Services"><spna className="post-title" >SERVICES</spna></a></li>
                    <li className={splitLocation[1] === "Contact" ? "menu-active" : ""}><a className="nav-bar" href="/Contact"><spna className="post-title" >CONTACT US</spna></a></li>
                </ul>                
            </div>
            <div className="social-media">
                <div className="social-media-icon">
                    <ul className="social-media-desktop">
                    <li>
                            <a href="https://www.facebook.com/Sundu-Singh-Groups-102103562266621"><FaFacebookSquare  className="Facebook"/></a>                       
                            
                        </li>                    
                        <li>
                            <a href="mailto:info@sundusingh.com"><SiGmail className="Gmail"/></a>                       
                            
                        </li>
                        <li>
                            <a href="https://wa.me/918882696492"><FaWhatsappSquare className="Whatsapp"/></a>                       
                            
                        </li>
                        <li>
                            <a href="https://goo.gl/maps/JvGVJTkGktqitGUs7"><SiGooglemaps  className="Googlemaps"/></a>                       
                            
                        </li>
                        <li>
                            <a href="tel:+918882696492"><BsTelephoneFill className="phone"/></a>                       
                            
                        </li>
                    </ul>
                </div>
                {/* hamburger menu  */}
                {/* <Navbar expand="sm" collapseOnSelect> */}
                <div className="hamburger-menu">
                    <NavLink to="#"  onClick={() => setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu className="menu-icon"/></NavLink>
                </div>
                {/* </Navbar> */}
            </div>           
        </nav>
        <div className="header">
            <div className="header-content">
                <ul>
                    <li><a href="mailto:info@sundusingh.com"><HiMail/> info@sundusingh.com</a></li>
                    <li><a href="tel:+918882696492"><BsTelephoneFill/> 91-8882696492</a></li>
                </ul>
            </div>
        </div>
        </div>
        
        </>
    )
}
export default Navbar;