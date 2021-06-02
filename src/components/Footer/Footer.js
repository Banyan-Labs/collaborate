import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {SITE_DATA} from '../../site-data'

// Created from the following video:
// https://www.youtube.com/watch?v=g459Eia-bxw&t=89s

function Footer() {
    return (

        <div className="main-footer">

            {/* <div className="container"> */}
                {/* <div className="row"> */}
                    <div class="flex-container">

                           <div><a href={SITE_DATA.contactLinks.github}><FontAwesomeIcon icon={faGithub} /></a></div>
                           <div><a href={SITE_DATA.contactLinks.twitter}><FontAwesomeIcon icon={faTwitter} /></a></div>
                           <div><a href={SITE_DATA.contactLinks.linkedIn}><FontAwesomeIcon icon={faLinkedin} /></a></div>

          
                    </div>
                {/* </div> */}
                <div class="footer-copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 text-right">
                                <p className="text-xs-center" style={{color:'lightgray'}}>
                                    &copy;{new Date().getFullYear()} Banyan Labs - All Rights Reserved
                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}

        </div>
    )
}

export default Footer;
