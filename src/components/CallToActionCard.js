import React from 'react';
import { StyledButton } from './styles/Button.styled';
import { StyledActionCard } from './styles/CallToActionCard.styled';

export default function CallToActionCard() {
  return (
    <StyledActionCard>
      <div>
        <h2>Ready to Build Your Community</h2>
        <StyledButton bg={({ theme }) => theme.colors.primaryButton} color='#fff'>Get Started for Free</StyledButton>
      </div>
    </StyledActionCard>
  );
}
