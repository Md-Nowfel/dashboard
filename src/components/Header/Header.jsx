import React from "react";
import {
  HeaderContainer,
  Title,
  MobileSearchBar,
  RightSection,
  LeftSection,
  MobileSearch,
  LaptopSearchField,
  MediumScreenButton,
} from "./Header.styles";
import logo from "../../assets/images/logo-light.webp";
import user from "../../assets/images/avatar-sm.webp";
import SearchField from "../SearchField/SearchField";
import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import { Bell, MessageSquare, Search, Menu } from "react-feather";

function Header({ title = "Dashboard", handleOpenModal }) {
  return (
    <HeaderContainer>
      <LeftSection>
        <MobileSearchBar>
          <IconButton type="picture" >
            <img src={logo} alt="Logo" />
          </IconButton>
          <IconButton type="icon" onClick={handleOpenModal}>
            <Menu />
          </IconButton>
        </MobileSearchBar>
        <Title>{title}</Title>
      </LeftSection>
      <RightSection>
        <LaptopSearchField>
          <SearchField />
        </LaptopSearchField>
        <MediumScreenButton>
          <Button color="--color-dark" width={100}>
            Create
          </Button>
        </MediumScreenButton>
        <MobileSearch>
          <IconButton type="icon">
            <Search />
          </IconButton>
        </MobileSearch>
        <IconButton type="icon">
          <Bell />
        </IconButton>
        <IconButton type="icon">
          <MessageSquare />
        </IconButton>
        <IconButton type="picture">
          <img src={user} alt="User" />
        </IconButton>
      </RightSection>
    </HeaderContainer>
  );
}

export default Header;
