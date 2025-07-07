import styled from "styled-components";

export const SidebarContainer = styled.div`
  /* Add styles for Sidebar */
  padding: 1.5rem;

  ${(props) => props.type === "mobile" && `
    padding: 0;
    
    `}
 
`;

export const NavLinkContainer = styled.div`
  /* Add styles for navigation links */
  padding: 1.5rem 0 1.5rem 0.5rem;
  

`;

export const NavLinkItem = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  color: var(--color-mutedText);
  font-size: var(--font-size-medium);
  cursor: pointer;
  padding: 14px 18px;
  width: 200px;
  text-decoration: none;

  &:hover {
    color: var(--color-dark);
  }

  &.active {
    color: var(--color-dark);
    background-color: var(--color-light);
    border-radius: 10px;
    
  }
`;
