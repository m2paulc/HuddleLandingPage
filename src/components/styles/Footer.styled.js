import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 60px;

  img {
    padding: 0 0 2rem 0;
  }

  ul {
    list-style: none;
  }

  ul li {
    margin-bottom: 1.25rem;
  }

  ul li div {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  ul li div img {
    margin-top: 5px;
  }

  ul li:first-child img {
    height: 56px;
    width: 24px;
  }

  ul:not(:first-child) {
    width: 100%;
    text-align: center;
  }

  p {
    text-align: right;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    ul {
      padding: 0;
    }

    ul li {
      text-align: left;
      margin-bottom: 1rem;
    }

    ul li div img {
    margin-top: 3px;
  }

    p {
      margin-top: 1rem;
      text-align: center;
    }  
  }
`;