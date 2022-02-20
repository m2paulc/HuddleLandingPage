import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.75rem;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media(max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 3rem;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 4.5rem;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 0;
  }
`;