import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  
  & > div,
  & > ul {
    flex: 1;
  }

  & > div p {
    max-width: 50ch;
    padding: 1.5rem 0;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
`;