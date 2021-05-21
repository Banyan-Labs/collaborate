import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'

// Created from the following video:
// https://www.youtube.com/watch?v=g459Eia-bxw&t=89s

function Footer() {
    return (

        <div className="main-footer">
  
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <a href="#">Home</a>
                    </div>
                    {/* Column 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Twitter</h4>
                        <FontAwesomeIcon icon={faTwitter} />

                    </div>
                    {/* Column 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Github</h4>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                    {/* Column 4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Linkedin</h4>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Tamara's Great Footer - All Rights Reserved
                    </p>
                </div>
            </div>
           
        </div>
    )
}

export default Footer;
