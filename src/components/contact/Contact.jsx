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
                        <span className="address-name">WWW.SS-CONSTRUCTION.COM</span>
                      </div>
                    <address>
                      <div className="address-list">
                        <p>	<SiGooglemaps/> MAHARANA PRATAP CHOWK, LALGANJ (VAISHALI) BIHAR - 844121</p>
                        <p><FaWhatsappSquare/> +91-4563987123</p>
                        <p><BsTelephoneFill/> +91-6725558849</p>
                        <p><HiMail /> ss-construction@gmail.com</p>
                        
                      </div>

                    </address> 
                                       
                  </div>
                  <div className="social-media-contact">
                <div className="social-media-icon-contact">
                    <ul className="social-media-desktop-contact">
                        <li>
                            <NavLink to="#"><FaFacebookSquare  className="Facebook-contact"/></NavLink>                       
                            
                        </li>                    
                        <li>
                            <NavLink to="#"><SiGmail className="Gmail-contact"/></NavLink>                       
                            
                        </li>
                        <li>
                            <NavLink to="#"><FaWhatsappSquare className="Whatsapp-contact"/></NavLink>                       
                            
                        </li>
                        <li>
                            <NavLink to="#"><SiGooglemaps  className="Googlemaps-contact"/></NavLink>                       
                            
                        </li>
                        <li>
                            <NavLink to="#"><BsTelephoneFill className="phone-contact"/></NavLink>                       
                            
                        </li>
                    </ul>
                </div>                

            </div> 
                </div>
                
              </div>
              {/* <div className="col-sm-12 col-md-12 col-lg-8">
              <div className="contact-form-wrapper">
              <form name="get-touch-form" className="get-touch-form" id="get-touch-form" method="post" enctype="multipart/form-data">
              <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 padding-right-0">
              <div className="form-group">
              <input type="text" className="form-control" id="username" placeholder="Name" name="username">
              <div className="error" id="username_error"></div>
              </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="form-group">
              <input type="text" className="form-control" id="organisation" placeholder="Organisation" name="organisation">
              <div className="error" id="name_error"></div>
              </div>
              </div>
              </div>
              <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 padding-right-0">
              <div className="form-group">
              <input type="text" className="form-control" id="useremail" placeholder="Email ID" name="useremail">
              <div className="error" id="useremail_error"></div>
              </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="form-group">
              <input type="text" className="form-control" id="phone" placeholder="Phone Number" name="phone">
              <div className="error" id="phone_error"></div>
              </div>
              </div>
              </div>
              <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="form-group">
              <select className="input__field input__select--yoshiko form-control" name="enquiry_nature" id="enquiry_nature">
              <option value="" selected="">What is my query about?</option>
              <option value="EPC>Power">EPC&gt;Power</option>
              <option value="EPC>Metals &amp; Minerals">EPC&gt;Metals &amp; Minerals</option>
              <option value="EPC>Oil &amp; Gas">EPC&gt;Oil &amp; Gas</option>
              <option value="EPC>Renovation &amp; Maintenance">EPC&gt;Renovation &amp; Maintenance</option>
              <option value="Transmission &amp; Distribution">Transmission &amp; Distribution</option>
              <option value="Transportation">Transportation</option>
              <option value="Construction &amp; Enviornment">Construction &amp; Enviornment</option>
              <option value="Urban Infrastructure">Urban Infrastructure</option>
              <option value="Smart City">Smart City</option>
              <option value="Quality Services>Quality Inspection">Quality Services&gt;Quality Inspection</option>
              <option value="Quality Services>BIM Services">Quality Services&gt;BIM Services</option>
              <option value="Quality Services>TQ Services">Quality Services&gt;TQ Services</option>
              <option value="Quality Services>Utility Services">Quality Services&gt;Utility Services</option>
              <option value="Job Enquiry">Job Enquiry</option>
              </select>
              </div>
              </div>
              </div>
              <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="form-group">
              <textarea placeholder="Start typing here…" id="msg" name="msg"></textarea>
              <div className="error" id="msg_error"></div>
              </div>
              </div>
              </div>
              <div className="row">
              <div className="col-md-12">
              <div className="captchaCode">
              <div className="g-recaptcha" id="become_partner_captcha" data-sitekey="6LfaWsoUAAAAAJMay6BAk97AqcMi1OjlgI0ba-At"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LfaWsoUAAAAAJMay6BAk97AqcMi1OjlgI0ba-At&amp;co=aHR0cHM6Ly93d3cudGF0YXByb2plY3RzLmNvbTo0NDM.&amp;hl=en&amp;v=dPctOHA2ifhWm5WzFM_B5TjT&amp;size=normal&amp;cb=7kl1hx8nvmbb" role="presentation" name="a-8kzckjqixfym" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" width="304" height="78" frameborder="0"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
              </div>
              </div>
              </div>
              <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <button type="button" className="new_contact_submit_but btn-tata" id="drop_success_button"><span>Submit</span></button>
              </div>
              <span id="getwait_msg" className="alert-success alert-success-please"></span>
              <span id="getform_msg" className="alert-success alert-success-thank-you"></span>
              <span id="getform_msg_error" className="error"></span>
              </div>
              </form>
              </div>
              </div> */}
            </div>
        </div>
      </section>
</>;
}

export default Contact;
