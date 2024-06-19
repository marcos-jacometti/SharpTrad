import styled from "styled-components";

export const SubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  font-size: 1.18rem;

 .link {
    text-decoration: none;
    height: 5vh;
    padding: 1rem;
    color: inherit;
  }

 .link.active {
    color: #3e90f8;
  }
`;