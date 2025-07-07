import styled from "styled-components";

export const HeaderContainer = styled.header`
  /* Add styles for Header */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LeftSection = styled.div`
  display: flex;
  gap: 10px;
`;

export const RightSection = styled.div`
  /* Add styles for Header */
  display: flex;
  gap: 10px;
`;

export const MediumScreenButton = styled.div`
  display: flex;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileSearchBar = styled.div`
  display: none;
  gap: 10px;

  @media (max-width: ${(props) => props.theme.breakpoints.laptopLarge}) {
    display: flex;
  }
`;

export const LaptopSearchField = styled.div`
  display: flex;
  @media (max-width: ${(props) => props.theme.breakpoints.laptopSmall}) {
    display: none;
  }
`;

export const MobileSearch = styled.div`
  display: none;
  @media (max-width: ${(props) => props.theme.breakpoints.laptopSmall}) {
    display: flex;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: var(--font-size-xlarge);

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const SearchBar = styled.input`
  /* Add styles for search bar */
`;

export const CreateButton = styled.button`
  /* Add styles for create button */
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const UserAvatar = styled.img`
  /* Add styles for user avatar */
`;
