import React from 'react';
import {FaFacebookSquare, FaWhatsappSquare,  } from "react-icons/fa";
import { SiGooglemaps} from "react-icons/si";
import {BsTelephoneFill} from "react-icons/bs";
import {HiMail} from "react-icons/hi";
import { NavLink,useLocation } from "react-router-dom";

import "./Style.css";
const Footer = ({footer}) => {
    return (
        <>
        {/* <!-- Footer --> */}
            <footer className="text-center text-lg-start bg-light text-muted footer">
                {/* <!-- Section: Social media --> */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom main-footer " >
                    {/* <!-- Left --> */}
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* <!-- Left --> */}

                    {/* <!-- Right --> */}
                    <div>
                        <a className="me-4 text-reset sm-icon" href="https://www.facebook.com/Sundu-Singh-Groups-102103562266621"><FaFacebookSquare  className="Facebook-footer"/></a>
                        <a className="me-4 text-reset sm-icon" href="mailto:info@sundusingh.com"><HiMail className="Gmail-footer"/></a>
                        <a className="me-4 text-reset sm-icon" href="https://wa.me/918882696492"><FaWhatsappSquare className="Whatsapp-footer"/></a> 
                        <a className="me-4 text-reset sm-icon" href="https://goo.gl/maps/ZZPuV6aWB3BctB4K6"><SiGooglemaps  className="Googlemaps-footer"/></a> 
                        <a className="me-4 text-reset sm-icon" href="tel:+918882696492"><BsTelephoneFill className="phone-footer"/></a>            
                        
                    </div>
                    {/* <!-- Right --> */}
                </section>
                {/* <!-- Section: Social media --> */}

                {/* <!-- Section: Links  --> */}
                <section className="footer-content">
                    <div className="container text-center text-md-start ">
                    {/* <!-- Grid row --> */}
                    <div className="row pt-5">
                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* <!-- Content --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                SS-CONSTRUCTION
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Services
                            </h6>
                            <p>
                                Modern Home Builder
                            </p>
                            <p>
                                Material & Labour Cntract
                            </p>
                            <p>
                            2D 3D Design
                            </p>
                            <p>
                                Interior & Exterior Design
                            </p>
                            <p>
                                SITE INSPECTION
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <NavLink to="#" className="text-reset">Home</NavLink>
                            </p>
                            <p>
                                <NavLink to="#" className="text-reset">About Us</NavLink>
                            </p>
                            <p>
                                <NavLink to="#" className="text-reset">Project</NavLink>
                            </p>
                            <p>
                                <NavLink to="#" className="text-reset">Services</NavLink>
                            </p>
                            <p>
                                <NavLink to="#" className="text-reset">Contact Us</NavLink>
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><SiGooglemaps  className="Googlemaps-footer"/> Vaishali, Bihar, India</p>
                            <p><HiMail className="Gmail-footer"/> info@sundusingh.com</p>                                                                  
                            <p><FaWhatsappSquare  className="Whatsapp-footer"/> +91 659 454 1236</p>
                            <p><BsTelephoneFill className="phone-footer"/> +91 659 454 1236    </p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center p-4 footer-bottom">
                    © 2022 Copyright:
                    <a className="text-reset fw-bold" href="https://sundusingh.com/">www.sundusingh.com</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}
        </>
    );
}

export default Footer;