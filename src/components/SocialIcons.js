import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { StyledSocialIcons } from './styles/SocialIcons.styled';

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <ul>
        <li>
          <a href='https://twitter.com' aria-label='Twitter link'>
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href='https://facebook.com' aria-label='Facebook link'>
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href='https://linkedin.com' aria-label='Linkedin link'>
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </StyledSocialIcons>
  );
}