import styled from "styled-components";

export const SidebarContainer = styled.div`
  /* Add styles for Sidebar */
  padding: 1.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.laptopLarge}) {
    display: none;
  }
`;

export const NavLinkContainer = styled.div`
  /* Add styles for navigation links */
  padding: 1.5rem 0 1.5rem 0.5rem;
`;

export const NavLinkItem = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  padding-bottom: 30px;
  color: var(--color-mutedText);
  font-size: var(--font-size-medium);
  cursor: pointer;

  &:hover {
    color: var(--color-dark);
  }
`;
