import styled from "styled-components";

export const StyledActionCard = styled.div`
  position: relative;
  min-width: 375px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.75rem 0;

  & div {
    position: absolute;
    width: 359px;
    height: 196px;
    bottom: -72px;
    border-radius: 20px;
    box-shadow: 0 0 10px hsl(12 0% 45%);
    background-color: #fff;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;

    & h2 {
      font-size: 1.15rem;
      text-align: center;
      margin-bottom: 1rem;
    }

    & button {
      width: 290px;
      margin: 0 auto;
    }
  }
`;