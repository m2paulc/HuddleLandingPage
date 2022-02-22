import React from 'react';
import { Container } from './styles/Container.styled';
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { StyledButton } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';


export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' alt='logo'></Logo>
          <StyledButton>Try it Free</StyledButton>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Comunity Your Fans will Love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in geniune discussion.</p>
            <StyledButton bg={({ theme }) => theme.colors.primaryButton} color='#fff'>Get Started for Free</StyledButton>
          </div>
          <Image src='./images/illustration-mockups.svg' alt=''></Image>
        </Flex>
      </Container>
    </StyledHeader >
  );
}
