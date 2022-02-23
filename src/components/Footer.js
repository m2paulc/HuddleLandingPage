import React from 'react';
import SocialIcons from './SocialIcons';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/logo_white.svg' />
        <Flex>
          <ul>
            <li>
              <div>
                <img src='./images/icon-location.svg' alt='' />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            </li>
            <li>
              <div>
                <img src='./images/icon-phone.svg' alt='' />
                +1-543-123-4567
              </div>
            </li>
            <li>
              <div>
                <img src='./images/icon-email.svg' alt='' />
                example@huddle.com
              </div>
            </li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; 2022 Huddle. All rights reserved.</p>
      </Container>
    </StyledFooter>
  );
}
