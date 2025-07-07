import styled from "styled-components";

export const StyledLayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: var(--background);
`;

export const MainContent = styled.main`
overflow-y: auto; /* Make content scrollable if it overflows */
`;

export const LargeScreenSidebar = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.laptopLarge}) {
    display: none;
  }
`


export const StyledContent = styled.div`
  padding: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column; 
`