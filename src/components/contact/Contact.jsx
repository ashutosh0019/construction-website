import React from 'react';
import "./Contact.css";
import {FaFacebookSquare, FaWhatsappSquare,  } from "react-icons/fa";
import { SiGmail, SiGooglemaps} from "react-icons/si";
import {GiHamburgerMenu} from "react-icons/gi";
import {BsTelephoneFill} from "react-icons/bs";
import {HiMail} from "react-icons/hi";
import { NavLink,useLocation } from "react-router-dom";
const Contact=()=> {
  return <>
      <section className="drop-wrapper">
        <div className="container-custom">
          <h2 className="wrapper-heading head-color">Contact Us</h2>
            <div className="row">
              <div className="col-sm-4 col-md-12 col-lg-4">
                <div className="address-wrapper">                  
                  <div className="address-item">
                    <h3>SS-CONSTRUCTION</h3>
                      <div>
                        <span className="address-name">WWW.SUNDUSINGH.COM</span>
                      </div>
                    <address>
                      <div className="address-list">
                        <p>	<SiGooglemaps/> MAHARANA PRATAP CHOWK, LALGANJ (VAISHALI) BIHAR - 844121</p>
                        <p><FaWhatsappSquare/> +91-8882696492</p>
                        <p><BsTelephoneFill/> +91-8882696492</p>
                        <p><HiMail /> info@sundusingh.com</p>
                        
                      </div>

                    </address> 
                                       
                  </div>
                  <div className="social-media-contact">
                <div className="social-media-icon-contact">
                    <ul className="social-media-desktop-contact">
                        <li>
                            <a href="https://www.facebook.com/Sundu-Singh-Groups-102103562266621"><FaFacebookSquare  className="Facebook-contact"/></a>                       
                            
                        </li>                    
                        <li>
                            <a href="mailto:info@sundusingh.com"><SiGmail className="Gmail-contact"/></a>                       
                            
                        </li>
                        <li>
                            <a href="https://wa.me/918882696492"><FaWhatsappSquare className="Whatsapp-contact"/></a>                       
                            
                        </li>
                        <li>
                            <a href="https://goo.gl/maps/JvGVJTkGktqitGUs7"><SiGooglemaps  className="Googlemaps-contact"/></a>                       
                            
                        </li>
                        <li>
                            <a href="tel:+918882696492"><BsTelephoneFill className="phone-contact"/></a>                       
                            
                        </li>
                    </ul>
                </div>                

            </div> 
                </div>
                
              </div>
              
            </div>
        </div>
      </section>
</>
}

export default Contact;
