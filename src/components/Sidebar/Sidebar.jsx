import React from "react";
import { Logo } from "../Header/Header.styles";
import logo from "../../assets/images/logo-light.webp";
import {
  NavLinkContainer,
  NavLinkItem,
  SidebarContainer,
} from "./Sidebar.styles";
import { ShoppingBag } from "react-feather";
function Sidebar() {
  return (
    <SidebarContainer>
      <Logo src={logo} />
      <NavLinkContainer>
        <NavLinkItem>
          <ShoppingBag />
         uyuyuy
        </NavLinkItem>
        <NavLinkItem>
          <ShoppingBag />
          Dashboard
        </NavLinkItem>
        <NavLinkItem>
          <ShoppingBag />
          Dashboard
        </NavLinkItem>
        <NavLinkItem>
          <ShoppingBag />
          Dashboard
        </NavLinkItem>
        <NavLinkItem>
          <ShoppingBag />
          Dashboard
        </NavLinkItem>
      </NavLinkContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
