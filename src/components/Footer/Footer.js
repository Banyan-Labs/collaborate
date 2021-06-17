import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { SITE_DATA } from '../../site-data';

// test comment

function Footer() {
  return (
    <div className='main-footer'>
      <div class='footer-links'>
        <div>
          <a style={{ color: 'white' }} href={SITE_DATA.contactLinks.github}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div>
          <a style={{ color: 'white' }} href={SITE_DATA.contactLinks.twitter}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <div>
          <a style={{ color: 'white' }} href={SITE_DATA.contactLinks.linkedIn}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className='footer-copyright'>
        <p className='copyright-text'>
          &copy;{new Date().getFullYear()} Banyan Labs - All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
