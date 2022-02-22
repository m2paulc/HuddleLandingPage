import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px hsl(12 0% 45%);
  background-color: ${({ bg }) => bg || 'hsl(255 95% 98%)'};
  border-radius: 15px;
  margin: 3.75rem 0;
  padding: 4rem;
  flex-direction: ${({ layout }) => layout || 'row'};

  & > div {
    flex: 1;
  }

  img {
    width: 80%;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    justify-content: center;

    img {
      margin-top: 2rem;
    }
  }
`;