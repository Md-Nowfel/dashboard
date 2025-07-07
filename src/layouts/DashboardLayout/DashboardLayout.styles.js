import styled from "styled-components";

export const DashboardLayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: var(--background);
`;

export const MainContent = styled.main`
  padding: 1.5rem;
  width: 100%;
  overflow-y: auto; /* Make content scrollable if it overflows */
`;
