import React from "react";
import { Logo } from "../Header/Header.styles";
import logo from "../../assets/images/logo-light.webp";
import { DollarSign, Grid, Layers, Monitor, Tv, Users } from "react-feather";
import {
  NavLinkContainer,
  NavLinkItem,
  SidebarContainer,
} from "./Sidebar.styles";
import { ShoppingBag } from "react-feather";
import { NavLink } from "react-router-dom";


function Sidebar() {
  
  return (
    <SidebarContainer>
      <Logo src={logo} />
      <NavLinkContainer>
        <NavLinkItem as={NavLink} to="/dashboard">
          <Grid />
          Dashboard 
        </NavLinkItem>
        <NavLinkItem as={NavLink} to="/products">
          <Layers/>
          Products
        </NavLinkItem>
        <NavLinkItem as={NavLink} to="/customers">
          <Users/>
          Customers
        </NavLinkItem>
        <NavLinkItem as={NavLink} to="/shop">
          <ShoppingBag />
          Shop
        </NavLinkItem>
        <NavLinkItem as={NavLink} to="/income">
         <DollarSign />
          Income
        </NavLinkItem>
         <NavLinkItem as={NavLink} to="/promote">
          <Tv/>
          Promote
        </NavLinkItem>
      </NavLinkContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
