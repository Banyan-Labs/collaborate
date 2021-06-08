import React, { useContext } from 'react'
import './Footer.css'

import ThemeContext from '../../theme-context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { SITE_DATA } from '../../site-data'

// Created from the following video:
// https://www.youtube.com/watch?v=g459Eia-bxw&t=89s

// test comment

function Footer() {
    const theme = useContext(ThemeContext);
    return (

        <div style={theme} className="main-footer">

            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <a href="/">Home</a>
                    </div>
                    {/* Column 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h5 style={{ color: 'lightgray' }}>Social Media</h5>
                        <ul>
                            <li className="list-unstyled"><a href={SITE_DATA.contactLinks.github}><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li className="list-unstyled"><a href={SITE_DATA.contactLinks.twitter}><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li className="list-unstyled"><a href={SITE_DATA.contactLinks.linkedIn}><FontAwesomeIcon icon={faLinkedin} /></a></li>

                        </ul>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 text-right">
                                <p className="text-xs-center" style={{ color: 'lightgray' }}>
                                    &copy;{new Date().getFullYear()} Banyan Labs - All Rights Reserved
                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;
