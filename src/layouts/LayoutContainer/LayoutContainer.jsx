import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { 
  StyledLayoutContainer,
  MainContent,
  StyledContent
} from "./StyledLayoutContainer";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";

const TITLES = {
  "/dashboard": "Dashboard",
  "/products": "Products",
  "/customers": "Customers",
  "/shop": "Shop",
  "/income": "Income",
  "/promote": "Promote",
};

const LayoutContainer = ({ children }) => {
  const location = useLocation();
  const title = TITLES[location.pathname] || "Dashboard";

  return (
      <StyledLayoutContainer>
        <Sidebar />
        <StyledContent>
          <Header title={title} />
          <MainContent>{children}</MainContent>
        </StyledContent>
      </StyledLayoutContainer>
    
  );
};

export default LayoutContainer;
