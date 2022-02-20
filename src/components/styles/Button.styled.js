import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  padding: 0.95rem 3.75rem;
  border: none;
  border-radius: 3.5rem;
  box-shadow: 0 0 10px hsl(12 0% 45%);
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
  transition: transform 0.3s ease-in;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    margin: 2rem 0;
  }

  &:hover {
    opacity: 0.9;
    transform: scale(0.95);
  }
`;